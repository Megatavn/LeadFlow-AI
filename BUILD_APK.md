# Build Android APK

## 1. Run app locally

```bash
npm install
npm run dev
```

## 2. Build web app

```bash
npm run build
```

## 3. Create Android project

Run this once if the `android/` folder does not exist:

```bash
npx cap add android
```

## 4. Sync Capacitor

```bash
npx cap sync android
```

## 5. Build debug APK

```bash
cd android
./gradlew assembleDebug
```

APK output:

```bash
android/app/build/outputs/apk/debug/app-debug.apk
```

## GitHub Codespace notes

If Android SDK is missing:

```bash
bash scripts/setup-android-codespace.sh
echo "sdk.dir=$ANDROID_HOME" > android/local.properties
```

If Java version fails, use Java 21:

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
