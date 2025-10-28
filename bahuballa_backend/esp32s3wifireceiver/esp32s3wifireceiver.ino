#include <WiFi.h>
#include <WiFiUdp.h>

const char* ssid = "SmartBat";
const char* password = "12345678";

WiFiUDP udp;
const int udpPort = 4210;

void setup() {
  Serial.begin(115200);
  WiFi.begin(ssid, password);
  udp.begin(4210);
  Serial.print("Connecting to "); Serial.println(ssid);
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("\n✅ Connected to SmartBat");
  Serial.print("S3 IP: "); Serial.println(WiFi.localIP());

  udp.begin(udpPort);
  Serial.println("📡 UDP listening on port 4210...");
}

void loop() {
  int packetSize = udp.parsePacket();
  if (packetSize) {
    char buffer[255];
    int len = udp.read(buffer, 255);
    if (len > 0) buffer[len] = '\0';

    Serial.print("📥 Received: ");
    Serial.println(buffer);
  }
}
