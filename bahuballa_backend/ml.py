import os
import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, classification_report, confusion_matrix
import matplotlib.pyplot as plt
import seaborn as sns

# ✅ 1. Set your local dataset path here
DATASET_PATH = r"C:\Users\kumar\Bahuballa\cricket_shot_project\image_features.csv"  # <-- change to your actual file name

# ✅ 2. Load dataset
def load_dataset():
    if not os.path.exists(DATASET_PATH):
        raise FileNotFoundError(f"Dataset not found at: {DATASET_PATH}")
    print(f"📂 Loading dataset from {DATASET_PATH} ...")
    df = pd.read_csv(DATASET_PATH)
    print("✅ Dataset loaded successfully")
    print(f"Rows: {df.shape[0]} | Columns: {df.shape[1]}")
    print(df.head())
    return df

# ✅ 3. Preprocess the dataset
def preprocess_data(df: pd.DataFrame):
    # NOTE: Adjust feature/target column names based on your dataset
    X = df.drop(columns=['target'])   # replace 'target' with actual target column
    y = df['target']

    # Handle missing values if any
    X = X.fillna(0)

    # Split train/test
    X_train, X_test, y_train, y_test = train_test_split(
        X, y, test_size=0.2, random_state=42, stratify=y
    )
    print("✅ Data preprocessed and split")
    return X_train, X_test, y_train, y_test

# ✅ 4. Train model
def train_model(X_train, y_train):
    print("🧠 Training Random Forest model...")
    model = RandomForestClassifier(
        n_estimators=200,
        random_state=42,
        n_jobs=-1
    )
    model.fit(X_train, y_train)
    print("✅ Model trained successfully")
    return model

# ✅ 5. Evaluate model
def evaluate_model(model, X_test, y_test):
    print("📊 Evaluating model...")
    y_pred = model.predict(X_test)
    acc = accuracy_score(y_test, y_pred)
    print(f"✅ Accuracy: {acc:.4f}")
    print("\nClassification Report:\n", classification_report(y_test, y_pred))

    # Confusion matrix plot
    cm = confusion_matrix(y_test, y_pred)
    plt.figure(figsize=(6, 5))
    sns.heatmap(cm, annot=True, fmt='d', cmap='Blues')
    plt.title("Confusion Matrix")
    plt.xlabel("Predicted")
    plt.ylabel("True")
    plt.tight_layout()
    plt.show()

# ✅ 6. Main execution
if __name__ == "__main__":
    try:
        df = load_dataset()
        X_train, X_test, y_train, y_test = preprocess_data(df)
        model = train_model(X_train, y_train)
        evaluate_model(model, X_test, y_test)
    except Exception as e:
        print(f"❌ Error: {e}")
