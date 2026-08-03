import React, { createContext, useContext, useState } from 'react';

export const LanguageContext = createContext(undefined);

export const translations = {
  en: {
    // Brand
    brandName: 'ZIVORA',
    brandSub: 'SPECIALITY DENTAL CLINIC',
    tagline: 'Zivora Speciality Dental Clinic provides world-class, comprehensive dental care with modern technology, experienced specialists, and personalized treatment plans.',

    // Nav
    navAbout: 'About & Vision',
    navServices: 'Services',
    navWhyUs: 'Why Choose Us',
    navProcess: 'Patient Experience',
    navFaq: 'FAQ & Reviews',
    navContact: 'Contact Us',
    navPortal: 'Patient Portal',
    navBook: 'Book Appointment',

    // Hero Card & Extra Badges
    zivoraClinicName: 'Zivora Dental Clinic',
    specialityCareCenter: 'Speciality Care Center',
    heroPlanTitle: 'Personalized Care Plans',
    heroPlanBadge: '100% TAILORED',
    heroEquipTitle: 'Modern Equipment & Techniques',
    heroEquipBadge: 'STATE-OF-THE-ART',
    heroSpecTitle: 'Experienced Specialists',
    heroSpecBadge: 'BOARD-CERTIFIED',
    heroPill1: 'Patient-Centered Excellence',
    heroPill2: 'Comprehensive Care',
    heroWelcome: 'Welcome to Zivora',

    // About Extra Card
    aboutCardTitle: 'Comprehensive Specialty Care',
    aboutCardDesc: 'From young children to seniors, Zivora Speciality Dental Clinic provides specialized dentistry designed for comfort, precision, and lasting vitality.',
    aboutCoreSubtitle: 'Precision Dental Care Tailored to Every Smile',
    intlProtocols: 'INTERNATIONAL CLINICAL PROTOCOLS',
    btnBookService: 'Book Service',
    aboutFeature1: 'Evidence-based clinical treatments',
    aboutFeature2: 'Compassionate, patient-centered focus',
    aboutFeature3: 'Modern diagnostic & treatment technology',

    // Clinic Info & Location
    visitClinicTitle: 'Visit Our Dental Center',
    visitClinicSub: 'Located in the heart of Addis Ababa, our modern clinic is equipped with state-of-the-art diagnostic and surgical technologies.',
    cityCountry: 'Bole Asresr Builging 4th floor',
    parkingInfo: '• Complimentary Valet Parking Available',
    triageInfo: '• Walk-in Triage Slots Reserved Daily',

    // Extra UI Elements
    btnScheduleConsult: 'Schedule Consultation',
    patientComfortTitle: 'Patient-Centered Comfort',
    patientComfortSub: 'Stress-free environment designed around gentle care and full transparency.',

    // Hero
    heroTitle: 'Smile Brighter. Live Better. ⭐',
    heroSub: 'Where Advanced Dentistry Meets Genuine Care.',
    heroBody1: "Your smile is more than just teeth—it's the confidence you carry into every conversation, every photograph, and every opportunity. At Zivora Speciality Dental Clinic, we combine modern dental technology, specialized expertise, and compassionate care to create healthy, beautiful smiles that last a lifetime.",
    btnBookAppt: 'Book an Appointment',
    btnExploreServices: 'Explore Our Services',

    // About Us
    aboutTag: 'About Us',
    aboutTitle: 'Welcome to Zivora Speciality Dental Clinic',
    aboutHeaderSub: 'Delivering advanced specialty dentistry with compassionate care, modern digital diagnostics, and personalized treatment plans in Addis Ababa.',
    tabExcellence: 'Excellence',
    techTag: 'SPECIALIST CLINIC TECHNOLOGY',
    techTitle: 'Modern Equipment & Sub-Millimeter Radiography',
    techDesc: 'Equipped with low-radiation digital X-rays, ultrasonic scaling, micro-endodontics, and sterilization autoclaves meeting WHO standards.',
    techFeat1: 'Hospital-Grade Sterilization',
    techFeat2: 'Pain-Free Anesthesia Tech',
    techFeat3: 'Board-Certified Endodontists',
    btnBookConsult: 'Book Specialist Consult',
    aboutBody1: 'At Zivora Speciality Dental Clinic, we are passionate about helping individuals and families achieve healthy, confident smiles through exceptional dental care. Our clinic combines modern technology, evidence-based treatment methods, and compassionate professionals to provide comprehensive dental services for patients of all ages.',
    aboutBody2: "We understand that every patient has different dental needs and personal goals. That's why we take time to listen carefully, perform thorough examinations, explain every treatment option clearly, and develop personalized care plans that prioritize both oral health and overall well-being.",
    aboutBody3: 'Our commitment goes beyond treating dental problems. We focus on prevention, education, and long-term oral health so our patients can enjoy beautiful smiles throughout every stage of life.',
    aboutBody4: 'Whether you need preventive care, restorative treatment, cosmetic improvements, or specialized dental procedures, you can trust our experienced team to deliver safe, comfortable, and high-quality care in a welcoming environment.',

    // Mission & Vision
    missionTag: 'Our Mission',
    missionTitle: 'Dedicated to Better Oral Health',
    missionBody1: 'Our mission is to provide exceptional dental care that combines advanced technology, professional expertise, and genuine compassion. We strive to create positive dental experiences while improving the health, comfort, and confidence of every patient who visits our clinic.',
    missionBody2: 'We believe dentistry should not only solve problems but also educate, prevent future complications, and empower patients to maintain lifelong oral health.',

    visionTag: 'Our Vision',
    visionTitle: 'Inspiring Healthier Smiles for Every Generation',
    visionBody: 'We envision becoming one of the most trusted specialty dental clinics by continuously delivering innovative dental solutions, maintaining the highest standards of clinical excellence, and building lasting relationships with our patients based on trust, integrity, and outstanding results.',

    // Why Choose Us
    whyTag: 'Why Choose Us',
    whyTitle: 'Experience Dentistry Designed Around You',
    whySub: 'Choosing the right dental clinic is an important decision. At Zivora, we combine expertise, technology, and personalized attention to ensure every patient receives exceptional care from the moment they walk through our doors.',
    why1Title: 'Personalized Care',
    why1Desc: 'Every patient receives a customized treatment plan tailored to their oral health, lifestyle, and goals.',
    why2Title: 'Experienced Professionals',
    why2Desc: 'Our dental professionals stay updated with modern techniques and international best practices to provide outstanding clinical care.',
    why3Title: 'Modern Dental Technology',
    why3Desc: 'We invest in advanced equipment that improves diagnostic accuracy, treatment efficiency, patient comfort, and long-term outcomes.',
    why4Title: 'Comfortable Environment',
    why4Desc: 'Our clinic has been designed to provide a calm, welcoming atmosphere where patients feel relaxed throughout every stage of their treatment.',
    why5Title: 'Comprehensive Services',
    why5Desc: 'From routine check-ups to complex restorative and cosmetic procedures, we provide complete dental care under one roof.',
    why6Title: 'Focus on Prevention',
    why6Desc: 'Preventive dentistry is at the heart of everything we do. We believe early detection and regular care are the keys to maintaining healthy smiles.',

    // Services
    servTag: 'Our Services',
    servTitle: 'Complete Dental Solutions for Every Smile',
    diagBannerTag: '360° DIAGNOSTIC EVALUATION',
    diagBannerTitle: 'Unsure Which Treatment You Need?',
    diagBannerDesc: 'Schedule a comprehensive diagnostic consultation with our board-certified dental specialists in Bole Asres 4th Floor.',
    diagBannerBtn: 'Schedule Consultation',
    
    s1Title: 'General Dentistry',
    s1Desc: 'Regular dental examinations are essential for maintaining healthy teeth and gums. Our comprehensive dental check-ups allow us to identify potential concerns early, helping prevent more complex problems in the future.',
    s1Item1: 'Routine Dental Exams',
    s1Item2: 'Oral Health Assessments',
    s1Item3: 'Dental Fillings',
    s1Item4: 'Preventive Treatments',
    s1Item5: 'Tooth Extractions',
    s1Item6: 'Gum Health Evaluations',

    s2Title: 'Professional Dental Cleaning',
    s2Desc: 'Plaque and tartar can build up even with excellent brushing habits. Professional dental cleaning removes harmful deposits, reduces the risk of gum disease, eliminates surface stains, and leaves your smile feeling fresh and healthy.',
    s2Item1: 'Fresher Breath',
    s2Item2: 'Healthier Gums',
    s2Item3: 'Reduced Risk of Gum Disease',
    s2Item4: 'Brighter Smile',
    s2Item5: 'Improved Oral Hygiene',

    s3Title: 'Cosmetic Dentistry',
    s3Desc: 'Your smile is one of your greatest assets. Our cosmetic treatments are designed to enhance appearance while preserving the health and function of your natural teeth.',
    s3Item1: 'Teeth Whitening',
    s3Item2: 'Dental Veneers',
    s3Item3: 'Smile Makeovers',
    s3Item4: 'Cosmetic Bonding',
    s3Item5: 'Tooth Contouring',
    s3Item6: 'Aesthetic Restorations',

    s4Title: 'Orthodontics',
    s4Desc: 'Properly aligned teeth improve both appearance and oral health. We offer orthodontic solutions that help correct bite problems, crowded teeth, spacing issues, and alignment concerns.',
    s4Item1: 'Straighter Teeth',
    s4Item2: 'Improved Bite',
    s4Item3: 'Easier Cleaning',
    s4Item4: 'Better Confidence',
    s4Item5: 'Enhanced Oral Health',

    s5Title: 'Dental Implants',
    s5Desc: 'Missing teeth affect both confidence and functionality. Dental implants provide a durable, natural-looking replacement that restores your smile while preserving jawbone health.',
    s5Item1: 'Permanent Tooth Replacement',
    s5Item2: 'Natural Appearance',
    s5Item3: 'Improved Speech',
    s5Item4: 'Better Chewing Ability',
    s5Item5: 'Long-Term Durability',

    s6Title: 'Root Canal Therapy',
    s6Desc: 'Modern root canal treatment is safe, effective, and designed to relieve pain while preserving your natural tooth whenever possible. Our specialists use advanced techniques that maximize comfort and improve long-term success.',

    s7Title: 'Pediatric Dentistry',
    s7Desc: "Children deserve specialized dental care in a positive and friendly environment. We help young patients develop healthy oral habits while making dental visits enjoyable and educational.",

    s8Title: 'Oral Surgery',
    s8Desc: 'When surgical treatment is necessary, our experienced team performs procedures with precision, safety, and patient comfort as the highest priorities.',
    s8Item1: 'Wisdom Tooth Removal',
    s8Item2: 'Surgical Extractions',
    s8Item3: 'Minor Oral Surgery',
    s8Item4: 'Infection Management',

    // Patient Experience
    expTag: 'Our Patient Experience',
    expTitle: 'Your Comfort Matters',
    expBody1: "We understand that many patients feel anxious about visiting the dentist. That's why we've created an environment focused on comfort, trust, and compassionate care.",
    expBody2: 'From your first consultation until your final follow-up appointment, our team is committed to ensuring you feel informed, supported, and confident throughout every step of your treatment.',

    // Treatment Process
    procTag: 'Our Treatment Process',
    procTitle: 'Simple, Transparent, and Personalized',
    step1Title: 'Step One: Consultation',
    step1Desc: 'We begin by listening carefully to your concerns, reviewing your dental history, and understanding your treatment goals.',
    step2Title: 'Step Two: Comprehensive Examination',
    step2Desc: 'Our specialists perform detailed examinations using modern diagnostic technology to accurately assess your oral health.',
    step3Title: 'Step Three: Personalized Treatment Plan',
    step3Desc: 'We explain every available treatment option and work with you to create a customized care plan that fits your needs and budget.',
    step4Title: 'Step Four: Expert Treatment',
    step4Desc: 'Our experienced professionals perform every procedure with precision, attention to detail, and patient comfort as top priorities.',
    step5Title: 'Step Five: Ongoing Care',
    step5Desc: 'We provide follow-up care, preventive guidance, and routine maintenance to help you enjoy lasting oral health.',

    // Commitment & Education
    commitTag: 'Our Commitment',
    commitTitle: 'Excellence You Can Trust',
    commitBody1: 'Every patient deserves honest advice, exceptional care, and treatments that prioritize long-term oral health.',
    commitBody2: 'At Zivora Speciality Dental Clinic, we are committed to building lifelong relationships by delivering consistent quality, compassionate service, and outstanding clinical results.',

    eduTag: 'Patient Education',
    eduTitle: 'Healthy Habits Create Healthy Smiles',
    eduBody: "Maintaining excellent oral health doesn't stop when you leave the clinic. We believe education is one of the most powerful tools in preventive dentistry.",
    eduGuideLabel: 'Our team provides practical guidance on:',
    edu1: 'Proper brushing techniques',
    edu2: 'Correct flossing methods',
    edu3: 'Nutrition for healthy teeth',
    edu4: 'Preventing gum disease',
    edu5: "Protecting children's oral health",
    edu6: 'Maintaining dental restorations',

    // Testimonials
    testTag: 'Testimonials',
    testTitle: 'What Our Patients Say',
    test1Name: 'Samrawit Tesfaye',
    test1Treatment: 'Smile Restoration',
    test1: '"The staff made me feel comfortable from the moment I arrived. My treatment was painless, and I couldn\'t be happier with my new smile."',
    test2Name: 'Mikael Getachew',
    test2Treatment: 'Family Dental Care',
    test2: '"Professional, caring, and highly skilled. I finally found a dental clinic I can trust for my whole family."',
    test3Name: 'Eyerus Kebede',
    test3Treatment: 'Routine & Preventive Care',
    test3: '"The clinic is modern, clean, and welcoming. Every step of my treatment was explained clearly, making the experience stress-free."',

    // FAQ
    faqTag: 'FAQ',
    faqTitle: 'Frequently Asked Questions',
    faq1Q: 'How often should I visit the dentist?',
    faq1A: 'Regular dental check-ups every six months help detect problems early and maintain optimal oral health.',
    faq2Q: 'Do you provide emergency dental care?',
    faq2A: 'Yes. We strive to accommodate emergency cases as quickly as possible to relieve pain and address urgent dental issues.',
    faq3Q: 'Do you treat children?',
    faq3A: 'Absolutely. We provide gentle, age-appropriate dental care for children in a friendly and supportive environment.',
    faq4Q: 'Is cosmetic dentistry right for me?',
    faq4A: "During your consultation, we'll assess your goals and recommend treatments that best enhance your smile while maintaining healthy teeth.",

    // Final CTA
    ctaTitle: 'Your Smile Is Worth Investing In',
    ctaBody1: "A healthy smile improves confidence, supports overall well-being, and leaves a lasting impression. Whether you're due for a routine check-up or considering advanced dental treatment, our team is ready to help you achieve the smile you deserve.",
    ctaBody2: 'Take the first step toward healthier teeth and greater confidence by scheduling your appointment with Zivora Speciality Dental Clinic today.',
    btnScheduleAppt: 'Schedule Your Appointment',
    btnContactTeam: 'Contact Our Team',

    // Contact / Location info
    contactTitle: 'Contact Us & Clinic Info',
    addressTitle: 'Clinic Address',
    addressVal: 'Bole Asres Building 4th Floor',
    hoursTitle: 'Operating Hours',
    hoursMonFri: 'Mon - Fri: 8:00 AM - 7:00 PM',
    hoursSat: 'Saturday: 9:00 AM - 5:00 PM',
    hoursSun: 'Sunday: Emergency Care Only',
    phoneTitle: 'Direct Lines',
    phoneVal: '+251953437878',
    emergencyTitle: 'Emergency Line',
    emergencyVal: '251953437878',
    emailVal: 'care@zivoradental.com',

    // Footer Extra
    footerMotto: 'Compassionate & Dedicated Care',
    footerQuickNav: 'Quick Navigation',
    footerPatientAccess: 'Patient Access',
    labelPhone: 'Phone',
    labelEmail: 'Email',

    // Footer
    footerDesc: 'Zivora Speciality Dental Clinic provides world-class dental care designed around your comfort, confidence, and long-term oral health.',
    copyright: '© 2026 Zivora Speciality Dental Clinic. All rights reserved.',

    // Modal - Booking
    bookingTitle: 'Schedule Your Appointment',
    stepServiceDoctor: '1. Service Selection',
    stepDateTime: '2. Date & Time',
    stepPatientInfo: '3. Patient Details',
    selectService: 'Select Dental Service',
    selectDoctor: 'Select Preferred Specialist',
    selectDate: 'Select Appointment Date',
    selectTimeSlot: 'Available Time Slots',
    fullName: 'Full Patient Name',
    emailAddress: 'Email Address',
    phoneNum: 'Phone Number',
    dob: 'Date of Birth',
    mrnOptional: 'Existing Medical Record Number (Optional)',
    visitReason: 'Reason for Visit / Special Needs',
    btnConfirmBooking: 'Confirm & Schedule Appointment',
    bookingSuccessTitle: 'Appointment Scheduled Successfully!',
    bookingSuccessMrn: 'Your Assigned Patient Record Number (MRN):',
  },

  am: {
    // Brand
    brandName: 'ዚቮራ',
    brandSub: 'ልዩ የጥርስ ሕክምና ክሊኒክ',
    tagline: 'ዚቮራ ልዩ የጥርስ ሕክምና ክሊኒክ ዘመናዊ ቴክኖሎጂን፣ ባለሙያ ስፔሻሊስቶችን እና ለእርስዎ የተበጀ የሕክምና እቅድን በማጣመር በዓለም አቀፍ ደረጃ የታገዘ ሙሉ የጥርስ ሕክምና አገልግሎት ይሰጣል።',

    // Nav
    navAbout: 'ስለ እኛ',
    navServices: 'አገልግሎቶቻችን',
    navWhyUs: 'ለምን እኛን ይመርጣሉ',
    navProcess: 'የሕክምና ሂደት',
    navFaq: 'ጥያቄዎችና አስተያየቶች',
    navContact: 'አድራሻችን',
    navPortal: 'የታካሚዎች ፖርታል',
    navBook: 'ቀጠሮ ለመያዝ',

    // Hero Card & Extra Badges
    zivoraClinicName: 'ዚቮራ የጥርስ ሕክምና ክሊኒክ',
    specialityCareCenter: 'ልዩ የጥርስ ሕክምና ማዕከል',
    heroPlanTitle: 'ለእርስዎ የታቀደ የሕክምና እቅድ',
    heroPlanBadge: '100% የታቀደ',
    heroEquipTitle: 'ዘመናዊ መሣሪያዎችና ቴክኖሎጂዎች',
    heroEquipBadge: 'ዘመናዊ',
    heroSpecTitle: 'ልምድ ያላቸው ስፔሻሊስቶች',
    heroSpecBadge: 'በቦርድ የተረጋገጡ',
    heroPill1: 'በታካሚው ላይ ያተኮረ የላቀ ጥራት',
    heroPill2: 'የተሟላ እንክብካቤ',
    heroWelcome: 'እንኳን ወደ ዚቮራ በደህና መጡ',

    // About Extra Card
    aboutCardTitle: 'የተሟላ ልዩ የጥርስ ሕክምና',
    aboutCardDesc: 'ከሕፃናት እስከ አዋቂዎች፣ ዚቮራ ልዩ የጥርስ ሕክምና ክሊኒክ ለምቾትዎና ለረጅም ጊዜ ጤንነት የተዘጋጀ ልዩ የጥርስ ሕክምና ይሰጣል።',
    aboutCoreSubtitle: 'ለእርሶ የተበጀ፣ ከፍተኛ ስኬት ያለው የጥርስ ህክምና',
    intlProtocols: 'ዓለም አቀፍ የክሊኒክ ፕሮቶኮሎች',
    btnBookService: 'ቀጠሮ ያስይዙ',
    aboutFeature1: 'በሳይንስ የተረጋገጡ ክሊኒካዊ ሕክምናዎች',
    aboutFeature2: 'በታካሚው ላይ ያተኮረ ቅን አገልግሎት',
    aboutFeature3: 'ዘመናዊ የምርመራና የሕክምና ቴክኖሎጂ',

    // Clinic Info & Location
    visitClinicTitle: 'የጥርስ ሕክምና ማዕከላችንን ይጎብኙ',
    visitClinicSub: 'በአዲስ አበባ እምብርት የሚገኘው ዘመናዊ ክሊኒካችን በዘመናዊ የምርመራና የቀዶ ሕክምና ቴክኖሎጂዎች የተሟላ ነው።',
    cityCountry: 'ቦሌ አስረስ ህንፃ፣ አዲስ አበባ',
    parkingInfo: '• ነፃ የፓርኪንግ አገልግሎት አለ',
    triageInfo: '• ለድንገተኛ ታካሚዎች የተመደቡ ቦታዎች',

    // Extra UI Elements
    btnScheduleConsult: 'ምክክር ለመያዝ',
    patientComfortTitle: 'በታካሚው ምቾት ላይ ያተኮረ',
    patientComfortSub: 'ከጭንቀት ነፃ የሆነ አካባቢ፣ ረጋ ያለ እንክብካቤ እና ሙሉ ግልጽነት።',

    // Hero
    heroTitle: 'ብሩህ ፈገግታ ለተሻለ ኑሮ ⭐',
    heroSub: 'ዘመናዊ የጥርስ ሕክምና ከእውነተኛ ትኩረትና እንክብካቤ ጋር የሚገናኝበት።',
    heroBody1: 'ፈገግታዎ ከጥርስ ውበት በላይ በእያንዳንዱ ውይይት፣ ፎቶግራፍ እና አጋጣሚ ሁሉ አብሮዎት የሚኖር በራስ መተማመን ነው:: በዚቮራ ልዩ የጥርስ ሕክምና ክሊኒክ ዘመናዊ የጥርስ ቴክኖሎጂን፣ የባለሙያዎችን ከፍተኛ ልምድ እና ፈጣን አክብሮታዊ እንክብካቤን በማጣመር እድሜ ልክ የሚዘልቅ ጤናማና ውብ ፈገግታ እንፈጥርልዎታለን።',
    btnBookAppt: 'ቀጠሮ ይያዙ',
    btnExploreServices: 'አገልግሎቶቻችንን ይመልከቱ',

    // About Us
    aboutTag: 'ስለ እኛ',
    aboutTitle: 'እንኳን ወደ ዚቮራ ልዩ የጥርስ ሕክምና ክሊኒክ በደህና መጡ',
    aboutHeaderSub: 'በአዲስ አበባ አቅራቢያ ቅንነት የተሞላበት እንክብካቤ፣ ዘመናዊ ዲጂታል የምርመራ መሳሪያዎች እና የተዘጋጁ ልዩ የጥርስ ህክምና አገልግሎቶችን እንሰጣለን።',
    tabExcellence: 'ልህቀት',
    techTag: 'የስፔሻሊስት ክሊኒክ ቴክኖሎጂ',
    techTitle: 'ዘመናዊ መሣሪያዎች እና ከፍተኛ ጥራት ያለው ራዲዮግራፊ',
    techDesc: 'አነስተኛ ራዲዮአክቲቭ ያላቸው ዲጂታል ኤክስ-ሬይዎች፣ አልትራሶኒክ ስኬሊንግ፣ ማይክሮ-ኢንዶዶንቲክስ እና የዓለም ጤና ድርጅት መስፈርቶችን በሚያሟሉ ስቴሪላይዘሮች የተደራጀ።',
    techFeat1: 'ከፍተኛ ደረጃ ያለው የዕቃዎች ማፅዳትና ስቴሪላይዜሽን',
    techFeat2: 'ህመም አልባ ማደንዘዣ ቴክኖሎጂ',
    techFeat3: 'በቦርድ የተረጋገጡ የጥርስ ስፔሻሊስቶች',
    btnBookConsult: 'የስፔሻሊስት ምክክር ለማስያዝ',
    aboutBody1: 'በዚቮራ ልዩ የጥርስ ሕክምና ክሊኒክ፣ ግለሰቦችና ቤተሰቦች አስተማማኝ የጥርስ እንክብካቤ አግኝተው ጤናማና ማራኪ ፈገግታ እንዲኖራቸው ትጉሃን ነን። ክሊኒካችን ዘመናዊ ቴክኖሎጂን፣ በሳይንስ የተረጋገጡ የሕክምና ዘዴዎችን እና ተንከባካቢ ባለሙያዎችን በማስተባበር ለሁሉም የዕድሜ ክልሎች የተሟላ የጥርስ ሕክምና አገልግሎት ይሰጣል።',
    aboutBody2: 'እያንዳንዱ ታካሚ ልዩ ፍላጎትና ግብ እንዳለው እንረዳለን። ስለዚህ ጊዜ ወስደን በጥንቃቄ እንሰማዎታለን፣ ሙሉ ምርመራ እናደርጋለን፣ የሕክምና አማራጮችን በግልጽ እናስረዳለን፣ እንዲሁም ለአፍና ጥርስ ጤንነትዎ ቅድሚያ የሚሰጥ የሕክምና እቅድ እናዘጋጃለን።',
    aboutBody3: 'ትኩረታችን የጥርስ ችግሮችን ከመፈወስ ባሻገር በቅድመ-መከላከል፣ በትምህርት እና በረጅም ጊዜ ጤንነት ላይ ያተኮረ ነው። ታካሚዎቻችን በሁሉም የሕይወት ደረጃ ውብ ፈገግታ እንዲኖራቸው እንሰራለን።',
    aboutBody4: 'የመከላከያ ምርመራ፣ የውበት ማሻሻያ ወይም ልዩ የጥርስ ሕክምና ሂደቶች ካስፈልጉዎት፣ ልምድ ያለው ቡድናችን ደህንነቶ የተጠበቀና ከፍተኛ ጥራት ያለው አገልግሎት እንደ ምንሰጥዎ አይጠራጠሩ።',

    // Mission & Vision
    missionTag: 'ተልእኳችን',
    missionTitle: 'ለተሻለ የአፍ እና የጥርስ ጤንነት',
    missionBody1: 'ተልእኳችን የላቀ ቴክኖሎጂን፣ ሙያዊ ብቃትን እና እውነተኛ አክብሮታዊ እንክብካቤን ያጣመረ የጥርስ ሕክምና መስጠት ነው። ክሊኒካችንን የሚጎበኙ ታካሚዎችን ጤና፣ ምቾትና በራስ መተማመን ማሳደግ ዋነኛ ግባችን ነው።',
    missionBody2: 'የጥርስ ሕክምና ችግሮችን መፍታት ብቻ ሳይሆን ማስተማር፣ የወደፊት ችግሮችን መከላከል እና ታካሚዎች እድሜ ልክ የሚዘልቅ የጥርስ ጤና እንዲኖራቸው ማስቻል አለበት ብለን እናምናለን።',

    visionTag: 'ራዕያችን',
    visionTitle: 'ለእያንዳንዱ ትውልድ ጤናማ ፈገግታን ማበርከት',
    visionBody: 'በፈጠራ የተሞሉ የጥርስ ሕክምና መፍትሄዎችን በማቅረብ፣ ከፍተኛ የሕክምና ጥራት ደረጃዎችን በመጠበቅ እና በእምነትና በታማኝነት ላይ የተመሰረተ ዘላቂ ግንኙነት ከታካሚዎቻችን ጋር በማጎልበት እጅግ ጥቂት ከሆኑ ልዩ የጥርስ ሕክምና ክሊኒኮች አንዱ ለመሆን እንመኛለን።',

    // Why Choose Us
    whyTag: 'ለምን እኛን ይመርጣሉ',
    whyTitle: 'ለእርስዎ የተመረጠ የጥርስ ሕክምናን ይለማመዱ',
    whySub: 'ለእያንዳንዱ ታካሚ  የአፍና ጥርስ ጤንነት ፣ ለአኗኗሩ እና ለግቦቹ የሚመጥን የሕክምና እቅድ ያገኛል።',
    why1Title: 'ለእርስዎ የተመረጠ እንክብካቤ',
    why1Desc: 'እያንዳንዱ ታካሚ ለግል የአፍና ጥርስ ጤንነቱ፣ ለአኗኗሩ እና ለግቦቹ የሚመጥን የሕክምና እቅድ ያገኛል።',
    why2Title: 'ልምድ ያላቸው ባለሙያዎች',
    why2Desc: 'ስፔሻሊስቶቻችን ደረጃቸውን የጠበቁ የሕክምና ዘዴዎችንና የቅርብ ጊዜ የቴክኖሎጂ ግኝቶችን በመጠቀም የላቀ አገልግሎት ይሰጣሉ።',
    why3Title: 'ዘመናዊ የጥርስ ሕክምና ቴክኖሎጂ',
    why3Desc: 'የምርመራ ትክክለኛነትን፣ የሕክምና ውጤታማነትንና የታካሚዎችን ምቾት የሚያረጋግጡ ዘመናዊ መሣሪያዎች ላይ ኢንቨስት እናደርጋለን።',
    why4Title: 'ምቹ የሆነ አገልግሎት',
    why4Desc: 'ክሊኒካችን ታካሚዎች በሕክምና ወቅት ሙሉ በሙሉ ዘና ብለው ሰላማዊ ስሜት እንዲሰማቸው ተደርጎ የተዘጋጀ ነው።',
    why5Title: 'የተሟላ አገልግሎት',
    why5Desc: 'ከመደበኛ ምርመራ እስከ ውስብስብ የእድሳት እና የውበት ሂደቶች፣ የተሟላ የጥርስ ሕክምናን በአንድ ጣሪያ ስር እንሰጣለን።',
    why6Title: 'በቅድመ-መከላከል ላይ ያተኮረ',
    why6Desc: 'ቅድመ-መከላከል ለምናደርገው ነገር ሁሉ መሠረት ነው። ቀድሞ ማወቅና መደበኛ ክትትል ማድረግ ጤናማ ፈገግታን ለማቆየት ቁልፍ ናቸው ብለን እናምናለን።',

    // Services
    servTag: 'አገልግሎቶቻችን',
    servTitle: 'ለእያንዳንዱ ፈገግታ የተሟላ የጥርስ ሕክምና መፍትሄዎች',
    diagBannerTag: '360° የተሟላ የምርመራ ግምገማ',
    diagBannerTitle: 'የትኛው ሕክምና እንደሚፈልጉ እርግጠኛ አይደሉም?',
    diagBannerDesc: 'በቦሌ አስረስ ህንፃ 4ኛ ፎቅ ከሚገኙት በቦርድ ከተረጋገጡ የጥርስ ስፔሻሊስቶቻችን ጋር የተሟላ የምርመራ ምክክር ያድርጉ።',
    diagBannerBtn: 'ምክክር ለመያዝ',

    s1Title: 'አጠቃላይ የጥርስ ሕክምና (General Dentistry)',
    s1Desc: 'መደበኛ የጥርስ ምርመራዎች ጤናማ ጥርስና ድድን ለመጠበቅ ወሳኝ ናቸው። አጠቃላይ ምርመራዎቻችን ሊከሰቱ የሚችሉ ችግሮችን ቀድመው ለመለየትና ወደ ስር የሰደደ ደረጃ እንዳይሸጋገሩ ለመከላከል ይረዳሉ።',
    s1Item1: 'መደበኛ የጥርስ ምርመራ',
    s1Item2: 'የአፍና የጥርስ ጤና ምዘና',
    s1Item3: 'የጥርስ ሙሌት (Fillings)',
    s1Item4: 'የመከላከያ ህክምናዎች',
    s1Item5: 'ጥርስ መንቀል',
    s1Item6: 'የድድ ጤንነት ምርመራ',

    s2Title: 'ፕሮፌሽናል የጥርስ ጽዳት (Dental Cleaning)',
    s2Desc: 'ጥሩ የመቦረሽ ልምድ ቢኖርዎትም የጥርስ ካልሲየም (ታርታር) እና አፍራሽ ቆሻሻዎች ሊከማቹ ይችላሉ። ሙያዊ የጥርስ ጽዳት ጎጂ ተቀማጮችን ያስወግዳል፣ የድድ በሽታ ስጋትን ይቀንሳል፣ እንዲሁም ፈገግታዎን ትኩስና ብሩህ ያደርጋል።',
    s2Item1: 'ትኩስና ደስ የሚል እስትንፋስ',
    s2Item2: 'ጤናማና ጠንካራ ድድ',
    s2Item3: 'የድድ ህመም ስጋትን መቀነስ',
    s2Item4: 'ፅዱና ብሩህ ፈገግታ',
    s2Item5: 'የተሻሻለ የአፍ ንጽህና',

    s3Title: 'የውበት ጥርስ ሕክምና (Cosmetic Dentistry)',
    s3Desc: 'ፈገግታዎ የውበትዎ መግለጫ ነው። የውበት ህክምናዎቻችን የተፈጥሮ ጥርስዎን ጤናና ተግባር ሳይጎዱ ማራኪ መልክ እንዲኖረው ለማድረግ የተዘጋጁ ናቸው።',
    s3Item1: 'ጥርስ ማንጣት (Teeth Whitening)',
    s3Item2: 'ዴንታል ቬኒርስ (Veneers)',
    s3Item3: 'የፈገግታ እድሳት (Smile Makeovers)',
    s3Item4: 'ኮስሞቲክ ቦንዲንግ',
    s3Item5: 'የጥርስ ቅርፅ ማስተካከያ',
    s3Item6: 'የውበት ህክምና እድሳት',

    s4Title: 'የጥርስ ማስተካከያ ሕክምና (Orthodontics)',
    s4Desc: 'ትክክለኛ ቅርፅ ያላቸው ጥርሶች ውበትን ብቻ ሳይሆን የአፍና ጥርስ ጤናንም ያሻሽላሉ። የጥርስ መደራረብን፣ የቦታ ክፍተትንና የንክሻ ችግሮችን የሚያስተካክሉ ዘመናዊ የኦርቶዶንቲክስ መፍትሄዎችን እንሰጣለን።',
    s4Item1: 'የተሰተካከሉና ቀጥ ያሉ ጥርሶች',
    s4Item2: 'የተሻሻለ የንክሻ ስርዓት',
    s4Item3: 'ለጽዳት ምቹ የሆነ የጥርስ አደራደር',
    s4Item4: 'የተሻለ በራስ መተማመን',
    s4Item5: 'የተሻሻለ የአፍና ጥርስ ጤና',

    s5Title: 'የጥርስ ተከላ ሕክምና (Dental Implants)',
    s5Desc: 'የጎደሉ ጥርሶች በራስ መተማመንን እና የመብላት ችሎታን ይነካሉ። የጥርስ ተከላዎች የተፈጥሮ ጥርስን የሚተኩ፣ ዘላቂና የመንጋጋ አጥንትን ጤንነት የሚጠብቁ አስተማማኝ መፍትሄዎች ናቸው።',
    s5Item1: 'ቋሚ የጥርስ ምትክ',
    s5Item2: 'ተፈጥሮአዊ ገጽታ',
    s5Item3: 'የተሻሻለ የአነጋገር ጥራት',
    s5Item4: 'ምቹ የማኘክ ችሎታ',
    s5Item5: 'የረጅም ጊዜ ዘላቂነት',

    s6Title: 'የስር ሕክምና / ነርቭ ማውጣት (Root Canal Therapy)',
    s6Desc: 'ዘመናዊ የስር ሕክምና ህመምን በማስታገስ የተፈጥሮ ጥርስዎን ታድጎ ለማቆየት የሚረዳ አስተማማኝ አሰራር ነው። ስፔሻሊስቶቻችን ከፍተኛ ምቾትና ዘላቂ ስኬት የሚያስገኙ ዘመናዊ ዘዴዎችን ይጠቀማሉ።',

    s7Title: 'የሕፃናት ጥርስ ሕክምና (Pediatric Dentistry)',
    s7Desc: 'ሕፃናት አዎንታዊና አስደሳች በሆነ አከባቢ ውስጥ ልዩ የጥርስ እንክብካቤ ይገባቸዋል። ታናናሽ ታካሚዎች የጥርስ ጉብኝታቸውን እያወቁና እየተዝናኑ ጤናማ ልምዶችን እንዲያዳብሩ እንረዳቸዋለን።',

    s8Title: 'የአፍ እና የጥርስ ቀዶ ሕክምና (Oral Surgery)',
    s8Desc: 'የቀዶ ሕክምና አስፈላጊ በሚሆንበት ጊዜ፣ ልምድ ያለው ቡድናችን ሂደቶችን በጥንቃቄ፣ በደህንነት እና የታካሚውን ምቾት ቅድሚያ በመስጠት ያከናውናል።',
    s8Item1: 'የጥበብ ጥርስ ማውጣት',
    s8Item2: 'የቀዶ ሕክምና ጥርስ ማውጣት',
    s8Item3: 'አነስተኛ የአፍ ቀዶ ሕክምናዎች',
    s8Item4: 'የኢንፌክሽን ሕክምናና ቁጥጥር',

    // Patient Experience
    expTag: 'የታካሚዎቻችን አስተናገድ',
    expTitle: 'የእርስዎ ምቾት ቅድሚያ የሚሰጠው ጉዳይ ነው',
    expBody1: 'ብዙ ሰዎች ወደ ጥርስ ሕክምና ክሊኒክ ሲመጡ ጭንቀት ሊሰማቸው እንደሚችል እንረዳለን። ለዚህ ነው በምቾት፣ በእምነት እና በተንከባካቢነት ላይ ያተኮረ ሁኔታ የፈጠርነው።',
    expBody2: 'ከተጀመሪያው ምክክር ጀምሮ እስከ መጨረሻው ክትትል ድረስ፣ ቡድናችን ሙሉ መረጃ እንዲኖርዎት፣ ድጋፍ እንዲያገኙ እና በራስ መተማመን እንዲሰማዎት ለማድረግ ቁርጠኛ ነው።',

    // Treatment Process
    procTag: 'የሕክምና ሂደታችን',
    procTitle: 'ቀላል፣ ግልጽ እና ለእርስዎ የተበጀ',
    step1Title: 'ደረጃ 1: የቅድመ-ምክክር ውይይት',
    step1Desc: 'የእርስዎን ስጋት በጥንቃቄ በመስማት፣ የጥርስ ሕክምና ታሪክዎን በመገምገም እና ፍላጎትዎን በመረዳት እንጀምራለን።',
    step2Title: 'ደረጃ 2: አጠቃላይ ምርመራ',
    step2Desc: 'ስፔሻሊስቶቻችን የአፍና ጥርስ ጤንነትዎን በትክክል ለመገምገም ዘመናዊ የምርመራ ቴክኖሎጂን በመጠቀም ዝርዝር ምርመራ ያደርጋሉ።',
    step3Title: 'ደረጃ 3: ግላዊ የሕክምና እቅድ',
    step3Desc: 'አማራጮችን በግልጽ በማብራራት ከፍላጎትዎ እና ከበጀትዎ ጋር የሚስማማ የሕክምና እቅድ አብረን እንቀርፃለን።',
    step4Title: 'ደረጃ 4: ሙያዊ ሕክምና',
    step4Desc: 'ልምድ ያላቸው ስፔሻሊስቶቻችን እያንዳንዱን የሕክምና ሂደት በጥንቃቄ፣ በትኩረት እና ለምቾትዎ ቅድሚያ በመስጠት ያከናውናሉ።',
    step5Title: 'ደረጃ 5: የረጅም ጊዜ ክትትል',
    step5Desc: 'ዘላቂ የአፍና ጥርስ ጤና እንዲኖርዎት የመደበኛ ክትትል አገልግሎት እና የመከላከያ መመሪያዎችን እንሰጣለን።',

    // Commitment & Education
    commitTag: 'ቁርጠኝነታችን',
    commitTitle: 'የሚያምኑበት የላቀ ጥራት',
    commitBody1: 'እያንዳንዱ ታካሚ ታማኝ ምክር፣ ልዩ እንክብካቤ እና ለረጅም ጊዜ የጥርስ ጤና ቅድሚያ የሚሰጥ ሕክምና ይገባዋል።',
    commitBody2: 'በዚቮራ ልዩ የጥርስ ሕክምና ክሊኒክ፣ ወጥ የሆነ ጥራትን፣ ሩህሩህ አገልግሎትን እና አስደናቂ ክሊኒካዊ ውጤቶችን በማቅረብ ከታካሚዎቻችን ጋር ዘላቂ ግንኙነት ለመገንባት እንሰራለን።',

    eduTag: 'የታካሚዎች ግንዛቤ',
    eduTitle: 'ጤናማ ልምዶች ጤናማ ፈገግታን ይፈጥራሉ',
    eduBody: 'ጥሩ የአፍና የጥርስ ጤናን መጠበቅ ከክሊኒኩ ሲወጡ የሚያበቃ አይደለም። በትምህርትና ግንዛቤ ቅድመ-መከላከል ማድረግ የጥርስ ሕክምና ዋና አካል እንደሆነ እናምናለን።',
    eduGuideLabel: 'ቡድናችን በሚከተሉት ርዕሶች ላይ ተግባራዊ መመሪያዎችን ይሰጣል:',
    edu1: 'ትክክለኛ የጥርስ መቦረሽ ቴክኒኮች',
    edu2: 'ትክክለኛ የፍሎስ (የጥርስ ክር) አጠቃቀም',
    edu3: 'ለጥርስ ጤና የሚጠቅሙ አመጋገቦች',
    edu4: 'የድድ በሽታን የመከላከያ መንገዶች',
    edu5: 'የሕፃናትን የአፍና ጥርስ ጤና መጠበቂያ ዘዴዎች',
    edu6: 'የተሰሩ ጥርሶችን የመንከባከቢያ መንገዶች',

    // Testimonials
    testTag: 'የታካሚዎች አስተያየት',
    testTitle: 'ታካሚዎቻችን ስለ እኛ ምን ይላሉ?',
    test1Name: 'ሳምራዊት ተስፋዬ',
    test1Treatment: 'የፈገግታ ጥገናና ውበት',
    test1: '"ከደረስኩበት ቅጽበት ጀምሮ ሰራተኞቹ ሙሉ ምቾት እንዲሰማኝ አድርገውኛል። ሕክምናዬ ህመም የሌለው ነበር፣ በአዲሱ ፈገግታዬ እጅግ ደስተኛ ነኝ።"',
    test2Name: 'ሚካኤል ጌታቸው',
    test2Treatment: 'የቤተሰብ የጥርስ ሕክምና',
    test2: '"ሙያዊ፣ ተንከባካቢ እና ከፍተኛ ችሎታ ያላቸው ስፔሻሊስቶች ናቸው። በመጨረሻ ለሙሉ ቤተሰቤ የምተማመንበትን የጥርስ ክሊኒክ አገኘሁ።"',
    test3Name: 'እየሩስ ከበደ',
    test3Treatment: 'መደበኛና የመከላከያ እንክብካቤ',
    test3: '"ክሊኒኩ ዘመናዊ፣ ንጹህ እና እጅግ ተቀባይ ነው። እያንዳንዱ የሕክምናዬ ደረጃ በግልጽ ተብራርቶልኝ የነበረ በመሆኑ ተሞክሮው ከጭንቀት ነፃ ነበር።"',

    // FAQ
    faqTag: 'ተደጋጋሚ ጥያቄዎች',
    faqTitle: 'ተደጋግመው የሚጠየቁ ጥያቄዎች',
    faq1Q: 'ምን ያህል ጊዜ ወደ ጥርስ ሐኪም ማምራት አለብኝ?',
    faq1A: 'በየስድስት ወሩ መደበኛ የጥርስ ምርመራ ማድረግ ችግሮችን ቀድሞ ለመለየትና ጥሩ የአፍና ጥርስ ጤናን ለመጠበቅ ይረዳል።',
    faq2Q: 'የአደጋ ጊዜ የጥርስ ሕክምና አገልግሎት ትሰጣላችሁ?',
    faq2A: 'አዎ። ሕመምን ለማስታገስና አስቸኳይ የጥርስ ችግሮችን ለመፍታት የአደጋ ጊዜ ጉዳዮችን በፍጥነት አስተናግዳለን።',
    faq3Q: 'ሕፃናትን ታከማላችሁ?',
    faq3A: 'አዎ። ለሕፃናት ምቹና ወዳጃዊ በሆነ አካባቢ ውስጥ ረጋ ያለ፣ ለዕድሜያቸው ተስማሚ የሆነ የጥርስ እንክብካቤ እንሰጣለን።',
    faq4Q: 'የውበት ጥርስ ሕክምና ለእኔ ተስማሚ ነው?',
    faq4A: 'በምክክር ወቅት ፍላጎትዎን በመገምገም የተፈጥሮ ጥርስዎን ሳይጎዱ ፈገግታዎን የሚጨምሩ ህክምናዎችን እንመክራለን።',

    // Final CTA
    ctaTitle: 'ፈገግታዎ ኢንቨስት ሊደረግበት የሚገባ ሀብት ነው',
    ctaBody1: 'ጤናማ ፈገግታ በራስ መተማመንን ያሳድጋል፣ አጠቃላይ ጤናንም ይደግፋል፣ እንዲሁም የማይረሳ ስሜት ይፈጥራል። ለመደበኛ ምርመራም ሆነ ለላቀ የጥርስ ህክምና ለማግኘትብ እያሰቡ ከሆነ፣ የሚገባዎትን ውብ ፈገግታ እንዲያገኙ ለማገዝ ቡድናችን ዝግጁ ነው።',
    ctaBody2: 'ዛሬውኑ ከዚቮራ ልዩ የጥርስ ሕክምና ክሊኒክ ጋር ቀጠሮዎን በመያዝ ወደ ተሻለ የጥርስ ጤና እና በራስ መተማመን የመጀመሪያውን እርምጃ ይውሰዱ።',
    btnScheduleAppt: 'ቀጠሮዎን ይያዙ', 
    btnContactTeam: 'ቡድናችንን ያነጋግሩ',

    // Contact / Location info
    contactTitle: 'አድራሻችን እና የክሊኒኩ መረጃ',
    addressTitle: 'የክሊኒኩ አድራሻ',
    addressVal: 'ቦሌ አስረስ አራተኛ ፍሎር',
    hoursTitle: 'የሥራ ሰዓት',
    hoursMonFri: 'ሰኞ - አርብ: ከጠዋቱ 2:00 - ከሰዓት 1:00 (8:00 AM - 7:00 PM)',
    hoursSat: 'ቅዳሜ: ከጠዋቱ 3:00 - ከሰዓት 11:00 (9:00 AM - 5:00 PM)',
    hoursSun: 'እሁድ: ለአስቸኳይ ጊዜ ሕክምና ብቻ',
    phoneTitle: 'ቀጥታ ስልክ',
    phoneVal: '251953437878',
    emergencyTitle: 'የአደጋ ጊዜ ስልክ',
    emergencyVal: '251953437878',
    emailVal: 'care@zivoradental.com',

    // Footer Extra
    footerMotto: 'አክብሮታዊ እና ቁርጠኛ እንክብካቤ',
    footerQuickNav: 'ፈጣን ማውጫ',
    footerPatientAccess: 'የታካሚዎች አገልግሎት',
    labelPhone: 'ስልክ',
    labelEmail: 'ኢሜይል',

    // Footer
    footerDesc: 'ዚቮራ ልዩ የጥርስ ሕክምና ክሊኒክ በምቾትዎ፣ በራስ መተማመንዎ እና በረጅም ጊዜ የጥርስ ጤናዎ ላይ የተመሰረተ በዓለም አቀፍ ደረጃ ቴክኖሎጂዎች የታገዘ ሕክምና ይሰጣል።',
    copyright: '© 2026 ዚቮራ ልዩ የጥርስ ሕክምና ክሊኒክ። መብቱ በሕግ የተጠበቀ ነው።',

    // Modal - Booking
    bookingTitle: 'ቀጠሮዎን ይያዙ',
    stepServiceDoctor: '1. አገልግሎት መምረጥ',
    stepDateTime: '2. ቀን እና ሰዓት',
    stepPatientInfo: '3. የታካሚ መረጃ',
    selectService: 'የጥርስ ሕክምና አገልግሎት ይምረጡ',
    selectDoctor: 'የሚፈልጉትን ስፔሻሊስት ይምረጡ',
    selectDate: 'የቀጠሮ ቀን ይምረጡ',
    selectTimeSlot: 'የተመቹ ሰዓቶች',
    fullName: 'ሙሉ የታካሚ ስም',
    emailAddress: 'ኢሜይል አድራሻ',
    phoneNum: 'ስልክ ቁጥር',
    dob: 'የትውልድ ቀን',
    mrnOptional: 'የነበረ የታካሚ መለያ ቁጥር / MRN (ካለ)',
    visitReason: 'የመጡበት ምክንያት / ልዩ ፍላጎት',
    btnConfirmBooking: 'ቀጠሮውን ያረጋግጡ',
    bookingSuccessTitle: 'ቀጠሮዎ በተሳካ ሁኔታ ተይዟል!',
    bookingSuccessMrn: 'የተመደበልዎ የታካሚ መለያ ቁጥር (MRN):',
  },
};

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState('am');

  const toggleLang = () => {
    setLang((prev) => (prev === 'en' ? 'am' : 'en'));
  };

  const t = (key) => {
    return translations[lang]?.[key] || translations['en']?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
