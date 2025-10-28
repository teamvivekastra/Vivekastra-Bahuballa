# app.py
import streamlit as st
import pandas as pd
import matplotlib.pyplot as plt
import numpy as np
import time

# -------------------------------
# 1️⃣ Page Setup
# -------------------------------
st.set_page_config(page_title="Smart Cricket Bat Analyzer", page_icon="🏏", layout="wide")
st.title("🏏 Smart Cricket Bat - Intelligent Analyzer")

st.markdown("""
This dashboard analyzes **bat sensor data** (acceleration, force, angle) and detects when 
a **shot has been played** vs **idle motion** using smart logic.
""")

# -------------------------------
# 2️⃣ Load Data
# -------------------------------
@st.cache_data
def load_data():
    return pd.read_csv("bat_data1.csv")

df_full = load_data()

# Ensure proper timestamp order
df_full['timestamp'] = pd.to_datetime(df_full['timestamp'])
df_full = df_full.sort_values('timestamp')

# -------------------------------
# 3️⃣ Simulate Live Feed
# -------------------------------
N = st.slider("📈 Number of recent samples to visualize (simulate live data)", 50, len(df_full), 200)
df = df_full.tail(N)

# -------------------------------
# 4️⃣ Intelligent Shot Detection Logic
# -------------------------------
def detect_shots(data, force_th=15, angle_th=5):
    """Detects when a proper shot is played based on force + angle variation."""
    results = []
    prev_angle = None
    for i, row in data.iterrows():
        # Calculate angle change rate
        angle_change = 0 if prev_angle is None else abs(row['angle'] - prev_angle)
        prev_angle = row['angle']

        # Conditions for a 'shot'
        if row['force'] >= force_th and angle_change >= angle_th:
            results.append("🏏 Shot Played")
        elif row['force'] >= 10 and angle_change >= 2:
            results.append("⚡ Partial Swing")
        else:
            results.append("🟢 Idle / Holding Bat")
    data['status'] = results
    return data

df = detect_shots(df)

# -------------------------------
# 5️⃣ Summary Indicators
# -------------------------------
st.subheader("📊 Bat Summary")
col1, col2, col3, col4 = st.columns(4)
col1.metric("Max Force", f"{df['force'].max():.2f}")
col2.metric("Avg Angle", f"{df['angle'].mean():.2f}°")
col3.metric("Total Shots", str((df['status'] == "🏏 Shot Played").sum()))
col4.metric("Idle Samples", str((df['status'] == '🟢 Idle / Holding Bat').sum()))

# -------------------------------
# 6️⃣ Force & Angle Graphs
# -------------------------------
st.subheader("📈 Sensor Graphs")

tab1, tab2, tab3 = st.tabs(["Force", "Angle", "Acceleration"])

with tab1:
    fig1, ax1 = plt.subplots(figsize=(10, 4))
    ax1.plot(df['timestamp'], df['force'], color='red', label='Force')
    ax1.set_title("Force vs Time")
    ax1.set_xlabel("Timestamp")
    ax1.set_ylabel("Force Value")
    for i, val in enumerate(df['status']):
        if val == "🏏 Shot Played":
            ax1.scatter(df['timestamp'].iloc[i], df['force'].iloc[i], color='gold', s=80, marker='*', label='Shot' if i==0 else "")
    ax1.legend()
    st.pyplot(fig1)

with tab2:
    fig2, ax2 = plt.subplots(figsize=(10, 4))
    ax2.plot(df['timestamp'], df['angle'], color='orange', label='Angle')
    ax2.set_title("Angle Variation Over Time")
    ax2.set_xlabel("Timestamp")
    ax2.set_ylabel("Angle (°)")
    st.pyplot(fig2)

with tab3:
    fig3, ax3 = plt.subplots(figsize=(10, 4))
    ax3.plot(df['timestamp'], df['accX'], label='accX')
    ax3.plot(df['timestamp'], df['accY'], label='accY')
    ax3.plot(df['timestamp'], df['accZ'], label='accZ')
    ax3.set_title("Acceleration Over Time")
    ax3.legend()
    st.pyplot(fig3)

# -------------------------------
# 7️⃣ Live Status Table
# -------------------------------
st.subheader("🎯 Live Bat Motion Status")
st.dataframe(df[['timestamp', 'force', 'angle', 'accX', 'accY', 'accZ', 'status']].tail(10))

# -------------------------------
# 8️⃣ Auto-Refresh (Optional)
# -------------------------------
auto_refresh = st.checkbox("🔁 Auto-refresh data (simulating live feed)", value=False)
if auto_refresh:
    st.info("Refreshing every 3 seconds... Stop anytime.")
    time.sleep(3)
    st.rerun()

# -------------------------------
# Footer
# -------------------------------
st.markdown("---")
st.caption("Developed by D Arun Kumar | ESP32 Smart Bat | Intelligent Streamlit Analyzer 🚀")
