#!/usr/bin/env bash
set -e

ANDROID_HOME="$HOME/android-sdk"
CMDLINE_VERSION="11076708"
CMDLINE_ZIP="commandlinetools-linux-${CMDLINE_VERSION}_latest.zip"
CMDLINE_URL="https://dl.google.com/android/repository/${CMDLINE_ZIP}"

echo "Installing Java, unzip and wget..."
sudo apt-get update
sudo apt-get install -y openjdk-17-jdk unzip wget

mkdir -p "$ANDROID_HOME/cmdline-tools"
cd /tmp

if [ ! -f "$CMDLINE_ZIP" ]; then
  wget -q "$CMDLINE_URL" -O "$CMDLINE_ZIP"
fi

rm -rf /tmp/cmdline-tools "$ANDROID_HOME/cmdline-tools/latest"
unzip -q "$CMDLINE_ZIP" -d /tmp
mv /tmp/cmdline-tools "$ANDROID_HOME/cmdline-tools/latest"

cat <<ENV >> "$HOME/.bashrc"

export ANDROID_HOME="$ANDROID_HOME"
export ANDROID_SDK_ROOT="$ANDROID_HOME"
export PATH="\$PATH:\$ANDROID_HOME/cmdline-tools/latest/bin:\$ANDROID_HOME/platform-tools"
ENV

export ANDROID_HOME="$ANDROID_HOME"
export ANDROID_SDK_ROOT="$ANDROID_HOME"
export PATH="$PATH:$ANDROID_HOME/cmdline-tools/latest/bin:$ANDROID_HOME/platform-tools"

yes | sdkmanager --licenses >/dev/null
sdkmanager "platform-tools" "platforms;android-35" "build-tools;35.0.0"

echo "Android SDK ready. Run: source ~/.bashrc"
