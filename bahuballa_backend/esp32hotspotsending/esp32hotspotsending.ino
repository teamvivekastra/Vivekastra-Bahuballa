#include <WiFi.h>
#include <WiFiUdp.h>
#include <Wire.h>
#include <MPU6050_light.h>
#include <QMC5883LCompass.h>

// Sensor Pins
#define FSR_PIN 34
#define SOUND_PIN 35
#define LDR_PIN 32
#define SDA_PIN 21
#define SCL_PIN 22

// Wi-Fi AP credentials
const char* ssid = "SmartBat";
const char* password = "12345678";

// UDP settings
WiFiUDP udp;
const char* s3_ip = "192.168.4.2"; // S3 client static IP
const int udp_port = 4210;

// Sensors
TwoWire MPUWire = TwoWire(1);
MPU6050 mpu(MPUWire);
QMC5883LCompass compass;

// Sensor data
float accX, accY, accZ, angle, forceValue, micVal, ldrVal;
String direction;

String getCardinalDirection(int azimuth){
  if (azimuth >= 337 || azimuth < 23) return "N";
  else if (azimuth >= 23 && azimuth < 68) return "NE";
  else if (azimuth >= 68 && azimuth < 113) return "E";
  else if (azimuth >= 113 && azimuth < 158) return "SE";
  else if (azimuth >= 158 && azimuth < 203) return "S";
  else if (azimuth >= 203 && azimuth < 248) return "SW";
  else if (azimuth >= 248 && azimuth < 293) return "W";
  else if (azimuth >= 293 && azimuth < 337) return "NW";
  return "?";
}

void setup() {
  Serial.begin(115200);

  // Initialize sensors
  MPUWire.begin(18, 19);
  Wire.begin(SDA_PIN, SCL_PIN);
  if (mpu.begin() != 0) { Serial.println("MPU init failed"); while(1); }
  delay(1000);
  mpu.calcGyroOffsets();
  compass.init();

  // Start Wi-Fi AP
  WiFi.softAP(ssid, password);
  Serial.println("✅ ESP32 AP started");
  Serial.print("AP IP: "); Serial.println(WiFi.softAPIP());

  // Optional: assign static IP to S3 manually
}

void loop() {
  // Read sensors
  mpu.update();
  accX = mpu.getAccX();
  accY = mpu.getAccY();
  accZ = mpu.getAccZ();
  angle = atan2(accY, accZ) * 180.0 / PI;
  forceValue = analogRead(FSR_PIN) * (5.0 / 4095.0) * 10;
  micVal = analogRead(SOUND_PIN);
  ldrVal = analogRead(LDR_PIN);
  compass.read();
  direction = getCardinalDirection(compass.getAzimuth());

  // Create CSV string
  String data = String(accX,2)+","+String(accY,2)+","+String(accZ,2)+","+
                String(angle,2)+","+String(forceValue,2)+","+String(micVal,2)+","+
                String(ldrVal,2)+","+direction;

  // Send UDP to ESP32-S3
  udp.beginPacket(s3_ip, udp_port);
  udp.print(data);
  udp.endPacket();

  Serial.println("Sent: "+data);
  delay(200); // send every 200ms
}
