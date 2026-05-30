# Android build fixes for GitHub Codespace

## 1. Wrong folder / package.json not found

Run commands inside the project folder:

```bash
cd /workspaces/LeadFlow-AI/leadflow-ai-portfolio
```

## 2. Android SDK not found

Run:

```bash
bash scripts/setup-android-codespace.sh
echo "sdk.dir=$ANDROID_HOME" > android/local.properties
```

## 3. Java version errors

If you see:

```text
Unsupported class file major version 69
```

Java is too new. If you see:

```text
invalid source release: 21
```

Java is too old. Use Java 21 for recent Capacitor Android builds:

```bash
sudo apt-get update
sudo apt-get install -y openjdk-21-jdk
export JAVA_HOME=/usr/lib/jvm/java-21-openjdk-amd64
export PATH=$JAVA_HOME/bin:$PATH
java -version
```

Then rebuild:

```bash
cd android
./gradlew --stop
./gradlew clean
./gradlew assembleDebug
```

## 4. APK output

```bash
android/app/build/outputs/apk/debug/app-debug.apk
```
