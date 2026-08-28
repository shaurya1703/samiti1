# Rashtriyawadi Khatik Vikas Samiti Website

Modern, responsive NGO website with glassmorphism, motion effects and a membership form. Project GitHub aur Vercel deployment ke liye ready hai.

## 1. Form ko admin email se connect karein

1. `index.html` kholen.
2. `ADMIN_EMAIL_HERE` ko admin ke actual email address se replace karein.
3. File save karke GitHub par upload/push karein.
4. Vercel deployment ke baad pehli test submission karein.
5. FormSubmit verification email admin inbox mein aayega; usse approve karein.

Verification ke baad har membership application admin email par receive hogi.

## 2. GitHub par upload karein

### Browser se sabse aasaan tarika

1. GitHub par login karein aur `New repository` par click karein.
2. Repository name rakhein: `rashtriyawadi-khatik-vikas-samiti`.
3. Repository ko `Public` ya `Private` select karke `Create repository` karein.
4. `uploading an existing file` par click karein.
5. ZIP ko pehle extract karein. Extracted folder ke andar ki sabhi files upload karein—folder ko ZIP form mein upload na karein.
6. `Commit changes` par click karein.

Repository root mein `index.html`, `styles.css`, `script.js`, `vercel.json` aur `assets` folder dikhna chahiye.

## 3. Vercel par deploy karein

1. Vercel par GitHub account se login karein.
2. `Add New` → `Project` select karein.
3. GitHub repository `rashtriyawadi-khatik-vikas-samiti` ko import karein.
4. Framework Preset ko `Other` rehne dein.
5. Root Directory ko default `./` rehne dein.
6. Build Command aur Output Directory ko blank/default rehne dein.
7. `Deploy` par click karein.

Deployment complete hone par Vercel aapko live website URL dega. GitHub par future changes commit karte hi Vercel automatically updated website deploy karega.

## Local preview

`index.html` ko browser mein open karein.
