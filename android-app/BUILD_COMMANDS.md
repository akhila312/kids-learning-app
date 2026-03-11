# Build Android APK/AAB - Quick Commands

## ✅ EASIEST METHOD: PWA Builder (Recommended!)

1. Visit: https://www.pwabuilder.com
2. Enter your URL: `https://kids-learn-fun-time.vercel.app`
3. Click "Package For Stores" → "Android"
4. Download ready-to-upload AAB file!

No coding, no setup required! ✨

---

## 🔧 METHOD 2: Bubblewrap CLI

### Prerequisites Check:
```powershell
# Check Java version (need 11+)
java -version

# Check Android SDK
echo $env:ANDROID_HOME
```

### Install Requirements:
```powershell
# Install Java 11 if needed
winget install Oracle.JDK.11

# Install Android Studio (includes SDK)
# Download from: https://developer.android.com/studio

# Set environment variable
[System.Environment]::SetEnvironmentVariable('ANDROID_HOME', 'C:\Users\YourUser\AppData\Local\Android\Sdk', 'User')
```

### Build Commands:
```powershell
cd C:\code\kids-learning-app\android-app

# Initialize (interactive - answer prompts)
bubblewrap init --manifest https://kids-learn-fun-time.vercel.app/manifest.webmanifest

# Build APK
bubblewrap build

# Build AAB (preferred for Play Store)
bubblewrap build --generateSignedBundle
```

### Output Files:
- APK: `app-release-signed.apk`
- AAB: `app-release-bundle.aab`

---

## 🔧 METHOD 3: Capacitor

```powershell
cd C:\code\kids-learning-app\kids-app

# Install Capacitor
npm install @capacitor/core @capacitor/cli @capacitor/android

# Initialize
npx cap init "Kids Learning App" "com.kidslearn.alphabets"

# Add Android platform
npx cap add android

# Build web app
npm run build

# Sync to Android
npx cap sync

# Open in Android Studio
npx cap open android
```

Then in Android Studio:
- Build → Generate Signed Bundle/APK
- Follow wizard to create keystore
- Build Release AAB

---

## 🔑 Create Signing Key (if needed)

```powershell
cd C:\code\kids-learning-app\android-app

keytool -genkey -v -keystore android.keystore -alias android -keyalg RSA -keysize 2048 -validity 10000
```

**IMPORTANT:** Save the password! You'll need it for updates.

---

## 📦 Test Your APK

```powershell
# Install on connected device
adb install app-release-signed.apk

# Or drag & drop APK to emulator
```

---

## ✅ Verify Build

After building, check:
- [ ] File size reasonable (< 50MB)
- [ ] Opens without crashes
- [ ] All features work
- [ ] Offline mode works
- [ ] Icons display correctly
- [ ] No error messages

---

## 🚀 Upload to Play Store

1. Log in: https://play.google.com/console
2. Create new app or open existing
3. Go to: Release → Production → Create Release
4. Upload AAB file
5. Complete rollout

---

## 📱 Quick Test Links

- **Live App:** https://kids-learn-fun-time.vercel.app
- **Manifest:** https://kids-learn-fun-time.vercel.app/manifest.webmanifest
- **Privacy:** https://kids-learn-fun-time.vercel.app/privacy-policy.html
- **PWA Builder:** https://www.pwabuilder.com

---

## 🆘 Troubleshooting

**Error: ANDROID_HOME not set**
```powershell
[System.Environment]::SetEnvironmentVariable('ANDROID_HOME', 'C:\Users\YOUR_USERNAME\AppData\Local\Android\Sdk', 'User')
```

**Error: Java not found**
```powershell
winget install Oracle.JDK.11
```

**Error: Build failed**
- Clean build: `bubblewrap clean`
- Try PWA Builder instead (easier!)

---

## 📧 Need Help?

Check these resources:
- Bubblewrap: https://github.com/GoogleChromeLabs/bubblewrap
- Capacitor: https://capacitorjs.com/docs
- Play Console: https://support.google.com/googleplay/android-developer

---

**Your app is deployed and ready! 🎉**

**Live at:** https://kids-learn-fun-time.vercel.app
