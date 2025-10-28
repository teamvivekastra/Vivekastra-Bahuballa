#include <WiFi.h>
#include <WebServer.h>
#include <Wire.h>
#include <MPU6050_light.h>
#include <QMC5883LCompass.h>

// Sensor Pins
#define FSR_PIN 34
#define SOUND_PIN 35
#define LDR_PIN 32
#define SDA_PIN 21
#define SCL_PIN 22

// WiFi Credentials
const char* ssid = "SmartBat";
const char* password = "12345678";

// WiFi and Server
WebServer server(80);
TwoWire MPUWire = TwoWire(1);
MPU6050 mpu(MPUWire);
QMC5883LCompass compass;

// Sensor Data Variables
float angle = 0, forceValue = 0;
String direction = "N";
float accX = 0, accY = 0, accZ = 0;

String getCardinalDirection(int azimuth) {
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

const char htmlPage[] PROGMEM = R"rawliteral(
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>SmartBat Realtime Dashboard</title>
  <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap" rel="stylesheet">
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      scroll-behavior: smooth;
    }

    body {
      font-family: 'Orbitron', sans-serif;
      background: #050d1f;
      color: #ffffff;
      line-height: 1.6;
    }

    nav {
      background: #0d1229;
      padding: 15px 30px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: sticky;
      top: 0;
      z-index: 1000;
      box-shadow: 0 0 10px #00f2ff66;
    }

    nav h1 {
      color: #00f2ff;
      font-size: 24px;
    }

    nav a {
      color: #ffffff;
      margin-left: 20px;
      text-decoration: none;
      font-weight: bold;
      transition: color 0.3s;
    }

    nav a:hover {
      color: #00f2ff;
    }

    section {
      padding: 60px 20px;
      max-width: 1200px;
      margin: auto;
    }

    .section-title {
      font-size: 2.5rem;
      text-align: center;
      margin-bottom: 40px;
      color: #00f2ff;
      text-shadow: 0 0 10px #00f2ff88;
    }

    .component-cards {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      justify-content: center;
    }

    .component-card {
      background: #101b3b;
      padding: 20px;
      border-left: 5px solid #00f2ff;
      border-radius: 10px;
      width: 280px;
      box-shadow: 0 0 15px #00f2ff33;
      transition: transform 0.3s;
    }

    .component-card:hover {
      transform: scale(1.05);
      box-shadow: 0 0 20px #00f2ff77;
    }

    .dashboard-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 20px;
    }

    #data {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 20px;
      max-width: 1000px;
      margin: 30px auto;
      padding: 20px;
    }

    .data-card {
      background: #0c1021;
      border: 2px solid #00f0ff88;
      border-radius: 15px;
      box-shadow: 0 0 12px #00f0ff33;
      padding: 20px;
      transition: transform 0.3s ease;
    }

    .data-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 0 20px #00f0ffaa;
    }

    .label {
      display: block;
      color: #00f0ff;
      font-weight: bold;
      font-size: 1rem;
      margin-bottom: 8px;
      text-shadow: 0 0 6px #00f0ff;
    }

    .value {
      font-size: 1.2rem;
      color: #b0ffff;
    }

    footer {
      text-align: center;
      padding: 20px;
      background: #0d1229;
      font-size: 14px;
      color: #7f8fa6;
    }

  </style>
</head>
<body>

  <!-- Navigation -->
  <nav>
    <div>
      <a href="#home">Home</a>
      <a href="#compinfo">Components Info</a>
      <a href="#dashboard">Dashboard</a>

    </div>
  </nav>

  <!-- Home Section -->
  <section id="home">
    <h2 class="section-title">Smart Strike - By Quantum Connect</h2>
    <p style="text-align: center; max-width: 800px; margin: auto; color: #c7ecee;">
    Smart Strike is an innovative, sensor-powered cricket bat built using the ESP32 microcontroller. Designed for real-time performance analysis, it incorporates a variety of advanced sensors to monitor and evaluate different aspects of a player's swing and impact. These include motion tracking, force detection, audio cues, ambient light levels, and directional data—making Smart Strike a powerful tool for players and coaches aiming to enhance technique and precision.
    </p>
 
  </section>

  <section id="compinfo">
    <h2 class="section-title">Components Info</h2>
    <div class="component-cards">
      <div class="component-card"><strong>MPU6050:</strong> 3-axis accelerometer + gyroscope to detect motion and tilt.</div>
      <div class="component-card"><strong>QMC5883L:</strong> Magnetometer/Compass for direction and heading data.</div>
      <div class="component-card"><strong>FSR Sensor:</strong> Detects applied force on bat impact.</div>
      <div class="component-card"><strong>KY-038:</strong> Sound sensor to measure ambient or impact noise.</div>
      <div class="component-card"><strong>LDR:</strong> Light sensor to measure ambient brightness.</div>
    </div>
  </section>

  <section id="dashboard">
    <h2 class="section-title">Dashboard</h2>
    <div id="data">Loading...</div>
  </section>

  <script>
    async function fetchData() {
      const res = await fetch('/data');
      const data = await res.json();
      document.getElementById('data').innerHTML = `
        <div class="data-card"><span class="label">Accel X:</span><span class="value">${data.accX} g</span></div>
        <div class="data-card"><span class="label">Accel Y:</span><span class="value">${data.accY} g</span></div>
        <div class="data-card"><span class="label">Accel Z:</span><span class="value">${data.accZ} g</span></div>
        <div class="data-card"><span class="label">Angle:</span><span class="value">${data.angle}°</span></div>
        <div class="data-card"><span class="label">Direction:</span><span class="value">${data.direction}</span></div>
        <div class="data-card"><span class="label">Force (FSR):</span><span class="value">${data.force}</span></div>
        <div class="data-card"><span class="label">Mic Value:</span><span class="value">${data.mic}</span></div>
        <div class="data-card"><span class="label">LDR Value:</span><span class="value">${data.ldr}</span></div>
      `;
    }
    fetchData();
    setInterval(fetchData, 1000);
  </script>

  <footer>Smart Strike</footer>
</body>
</html>
)rawliteral";

void setup() {
  Serial.begin(115200);
  MPUWire.begin(18, 19);     
  Wire.begin(SDA_PIN, SCL_PIN); 

  // MPU6050 Init
  if (mpu.begin() != 0) {
    Serial.println("❌ MPU6050 init failed!");
    while (1);
  }
  delay(1000);
  mpu.calcGyroOffsets();
  Serial.println("✅ MPU6050 ready");

  // QMC5883L Init
  compass.init();
  Serial.println("✅ QMC5883L Compass initialized");

  // Start WiFi
  WiFi.softAP(ssid, password);
  Serial.println("✅ WiFi AP started");
  Serial.print("ESP32 IP: ");
  Serial.println(WiFi.softAPIP());

  // HTTP Routes
  server.on("/", []() {
    server.send_P(200, "text/html", htmlPage);
  });

  server.on("/data", []() {
    mpu.update();
    accX = mpu.getAccX();
    accY = mpu.getAccY();
    accZ = mpu.getAccZ();
    angle = atan2(accY, accZ) * 180.0 / PI;

    int rawFSR = analogRead(FSR_PIN);
    forceValue = rawFSR * (5.0 / 4095.0) * 10;

    float micVal = analogRead(SOUND_PIN);
    float ldrVal = analogRead(LDR_PIN);

    compass.read();
    int azimuth = compass.getAzimuth();
    direction = getCardinalDirection(azimuth);

    String json = "{";
    json += "\"accX\":" + String(accX, 2) + ",";
    json += "\"accY\":" + String(accY, 2) + ",";
    json += "\"accZ\":" + String(accZ, 2) + ",";
    json += "\"angle\":" + String(angle, 2) + ",";
    json += "\"force\":" + String(forceValue, 2) + ",";
    json += "\"mic\":" + String(micVal, 2) + ",";
    json += "\"ldr\":" + String(ldrVal, 2) + ",";
    json += "\"direction\":\"" + direction + "\"";
    json += "}";
    server.send(200, "application/json", json);
  });

  server.begin();
}

void loop() {
  server.handleClient();
}