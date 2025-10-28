# ==========================================================
# 🏏 Cricket Shot Classification (Local Version)
# Converted from Google Colab to local environment (Windows)
# ==========================================================

# ---- Step 1: Install dependencies (run once in terminal) ----
# pip install mediapipe opencv-python pandas numpy scikit-learn joblib tqdm

# ---- Step 2: Import libraries ----
import cv2
import mediapipe as mp
import os
import pandas as pd
import numpy as np
from tqdm import tqdm
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import classification_report, accuracy_score
import joblib

# ---- Step 3: Set your local paths ----
# Change these according to where your folders are
data_dir = r"C:\Users\kumar\bahuballa\ShotsData"
output_csv = r"C:\Users\kumar\bahuballa\cricket_shot_project\image_features.csv"
model_path = r"C:\Users\kumar\bahuballa\cricket_shot_project\cricket_shot_classifier_model.joblib"

# ---- Step 4: Initialize MediaPipe Pose ----
mp_pose = mp.solutions.pose
pose = mp_pose.Pose(static_image_mode=True)

# ---- Step 5: Define feature extraction function ----
def extract_features(image_path):
    image = cv2.imread(image_path)
    if image is None:
        return None
    rgb = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)
    results = pose.process(rgb)
    if not results.pose_landmarks:
        return None

    features = []
    for lm in results.pose_landmarks.landmark:
        features.extend([lm.x, lm.y, lm.z, lm.visibility])
    return features

# ---- Step 6: Extract pose features from all images ----
rows, labels = [], []

print("⏳ Extracting features from images...")
for folder in tqdm(os.listdir(data_dir)):
    label_path = os.path.join(data_dir, folder)
    if not os.path.isdir(label_path):
        continue
    for img_file in os.listdir(label_path):
        img_path = os.path.join(label_path, img_file)
        features = extract_features(img_path)
        if features:
            rows.append(features)
            labels.append(folder)

df = pd.DataFrame(rows)
df['label'] = labels

# ---- Step 7: Save features to CSV ----
os.makedirs(os.path.dirname(output_csv), exist_ok=True)
df.to_csv(output_csv, index=False)
print(f"✅ Saved extracted features to: {output_csv}")

# ---- Step 8: Train classifier ----
print("\n🏋️ Training model...")
X = df.drop(columns=['label'])
y = df['label']

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
model = RandomForestClassifier(n_estimators=200, random_state=42)
model.fit(X_train, y_train)

y_pred = model.predict(X_test)
print("\n📊 Accuracy:", accuracy_score(y_test, y_pred))
print("\nDetailed report:\n", classification_report(y_test, y_pred))

# ---- Step 9: Save trained model ----
joblib.dump(model, model_path)
print(f"💾 Model saved to: {model_path}")

# ---- Step 10: Real-time classification from webcam ----
def extract_features_from_frame(frame):
    rgb = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
    results = pose.process(rgb)
    if not results.pose_landmarks:
        return None
    features = []
    for lm in results.pose_landmarks.landmark:
        features.extend([lm.x, lm.y, lm.z, lm.visibility])
    return np.array(features).reshape(1, -1)

print("\n🎥 Starting real-time prediction... Press 'q' to quit.")
cap = cv2.VideoCapture(0)
model = joblib.load(model_path)

while cap.isOpened():
    ret, frame = cap.read()
    if not ret:
        break

    features = extract_features_from_frame(frame)
    if features is not None:
        pred = model.predict(features)[0]
        cv2.putText(frame, f"Shot: {pred}", (30, 50), cv2.FONT_HERSHEY_SIMPLEX,
                    1, (0, 255, 0), 2, cv2.LINE_AA)

    cv2.imshow('Cricket Shot Classifier', frame)
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

cap.release()
cv2.destroyAllWindows()
print("🛑 Real-time prediction stopped.")
