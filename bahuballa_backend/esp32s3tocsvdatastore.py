import serial
import csv
import os
import re
from datetime import datetime

# Configure serial port
ser = serial.Serial("COM6", 115200)  # Replace with your COM port
print("Listening from ESP32-S3...")

# CSV file setup
filename = "bat_data1.csv"
file_exists = os.path.exists(filename)

# Column headers
headers = ["accX", "accY", "accZ", "angle", "force", "mic", "ldr", "direction", "timestamp"]

with open(filename, "a", newline="", encoding="utf-8") as file:
    writer = csv.writer(file)

    # Write headers only if the file is new
    if not file_exists:
        writer.writerow(headers)

    while True:
        line = ser.readline().decode("utf-8", errors="ignore").strip()

        # Skip lines that contain "Received" or emojis/special characters
        if "Received" in line:
            continue  # ignore these lines

        # Keep only clean alphanumeric + comma + period + minus
        clean_line = re.sub(r"[^\w\s,.\-]+", "", line)

        if not clean_line:
            continue  # skip empty lines

        print(clean_line)

        # Split into CSV columns
        data = clean_line.split(",")

        # Write only if correct number of values are present
        if len(data) == len(headers) - 1:
            data.append(datetime.now().strftime("%Y-%m-%d %H:%M:%S"))
            writer.writerow(data)
        else:
            print("⚠ Skipped malformed line:", clean_line)