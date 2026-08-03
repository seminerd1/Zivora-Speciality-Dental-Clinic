import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';

const app = express();
const PORT = 3000;

app.use(express.json());

// In-memory data structures
interface Doctor {
  id: string;
  name: string;
  title: string;
  qualification: string;
  bio: string;
  experienceYears: number;
  rating: number;
  reviewCount: number;
  availableDays: string[];
  timeSlots: string[];
  avatarUrl: string;
}

interface Service {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  priceEstimate: string;
  durationMinutes: number;
}

interface Appointment {
  id: string;
  appointmentRef: string;
  patientName: string;
  email: string;
  phone: string;
  dateOfBirth?: string;
  gender?: string;
  mrn: string;
  doctorId: string;
  serviceId: string;
  appointmentDate: string;
  timeSlot: string;
  reasonForVisit?: string;
  notes?: string;
  status: 'CONFIRMED' | 'CANCELLED' | 'COMPLETED';
  createdAt: string;
  doctor?: Doctor;
  service?: Service;
}

interface Patient {
  id: string;
  mrn: string;
  fullName: string;
  dateOfBirth: string;
  bloodGroup: string;
  allergies: string;
  emergencyContact: string;
  passcode: string;
}

interface ClinicalRecord {
  id: string;
  patientId: string;
  visitDate: string;
  doctorName: string;
  diagnosis: string;
  treatmentSummary: string;
  doctorNotes: string;
  paymentStatus: string;
  billAmount: number;
  insuranceClaimed: number;
  xrayImageUrl: string;
  teethChart: Record<number, { toothNumber: number; toothName: string; condition: string; notes: string }>;
  prescriptions: Array<{ medicineName: string; dosage: string; duration: string; instructions: string }>;
}

// Initial Mock Data
const doctors: Doctor[] = [
  {
    id: 'doc-1',
    name: 'Dr. Hana Bekele, DDS',
    title: 'Lead Cosmetic & Restorative Specialist',
    qualification: 'DDS, Harvard School of Dental Medicine',
    bio: 'Dr. Hana brings over 14 years of clinical excellence in cosmetic dentistry, smile makeovers, and full-mouth rehabilitation.',
    experienceYears: 14,
    rating: 4.9,
    reviewCount: 184,
    availableDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    timeSlots: ['09:00 AM', '10:30 AM', '01:30 PM', '03:00 PM', '04:30 PM'],
    avatarUrl: 'https://images.unsplash.com/photo-1594824813566-88824278c065?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'doc-2',
    name: 'Dr. Yonas Tadesse, DMD',
    title: 'Specialist Implantologist & Oral Surgeon',
    qualification: 'DMD, Maxillofacial Surgery Specialist',
    bio: 'Specializing in computer-guided 3D dental implant placement, bone grafting, and wisdom teeth extraction with zero pain protocols.',
    experienceYears: 12,
    rating: 4.9,
    reviewCount: 152,
    availableDays: ['Monday', 'Wednesday', 'Friday', 'Saturday'],
    timeSlots: ['09:30 AM', '11:00 AM', '02:00 PM', '03:30 PM', '05:00 PM'],
    avatarUrl: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'doc-3',
    name: 'Dr. Selamawit Alemu, BDS',
    title: 'Orthodontist & Clear Aligner Specialist',
    qualification: 'BDS, MSc Orthodontics',
    bio: 'Certified Invisalign provider dedicated to creating aligned, harmonious smiles for adolescents and adult patients.',
    experienceYears: 10,
    rating: 4.8,
    reviewCount: 129,
    availableDays: ['Tuesday', 'Thursday', 'Saturday'],
    timeSlots: ['08:30 AM', '10:00 AM', '11:30 AM', '02:30 PM', '04:00 PM'],
    avatarUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'doc-4',
    name: 'Dr. Dawit Solomon, DDS',
    title: 'Endodontist & Root Canal Specialist',
    qualification: 'DDS, Micro-Endodontics Fellow',
    bio: 'Expert in painless single-visit root canal treatments using surgical microscopic precision.',
    experienceYears: 9,
    rating: 4.9,
    reviewCount: 98,
    availableDays: ['Monday', 'Tuesday', 'Wednesday', 'Friday'],
    timeSlots: ['09:00 AM', '11:00 AM', '01:00 PM', '03:00 PM'],
    avatarUrl: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=600&q=80',
  },
];

const services: Service[] = [
  {
    id: 'serv-1',
    title: 'Comprehensive Oral Exam & Check-up',
    category: 'General',
    shortDescription: 'Full clinical evaluation, oral cancer screening, and digital intraoral imaging.',
    priceEstimate: '$80 - $120',
    durationMinutes: 45,
  },
  {
    id: 'serv-2',
    title: 'Ultrasonic Dental Scaling & Polishing',
    category: 'Preventive',
    shortDescription: 'Removal of stubborn tartar, plaque buildup, and stain polishing for healthy gums.',
    priceEstimate: '$100 - $150',
    durationMinutes: 45,
  },
  {
    id: 'serv-3',
    title: 'Laser Teeth Whitening',
    category: 'Cosmetic',
    shortDescription: 'In-office clinical whitening achieving up to 8 shades brighter in a single 60-minute session.',
    priceEstimate: '$250 - $400',
    durationMinutes: 60,
  },
  {
    id: 'serv-4',
    title: '3D Computer-Guided Dental Implants',
    category: 'Restorative',
    shortDescription: 'Permanent titanium post placement for single or multiple missing teeth with natural porcelain crowns.',
    priceEstimate: '$1,200 - $2,500',
    durationMinutes: 90,
  },
  {
    id: 'serv-5',
    title: 'Clear Aligners & Orthodontic Braces',
    category: 'Orthodontics',
    shortDescription: 'Customized clear aligners or esthetic ceramic braces to correct tooth spacing and alignment.',
    priceEstimate: '$1,800 - $3,500',
    durationMinutes: 60,
  },
  {
    id: 'serv-6',
    title: 'Microscopic Root Canal Therapy',
    category: 'Endodontics',
    shortDescription: 'Pain-free treatment to save infected tooth pulp, finished with a structural protective seal.',
    priceEstimate: '$350 - $600',
    durationMinutes: 75,
  },
];

const patients: Patient[] = [
  {
    id: 'pat-1',
    mrn: 'ZIV-1001',
    fullName: 'Eleanor Vance',
    dateOfBirth: '1992-05-14',
    bloodGroup: 'O+',
    allergies: 'Penicillin (Mild Rash)',
    emergencyContact: '+1 (555) 982-1100',
    passcode: '1234',
  },
  {
    id: 'pat-2',
    mrn: 'ZIV-1002',
    fullName: 'Marcus Sterling',
    dateOfBirth: '1988-11-23',
    bloodGroup: 'A+',
    allergies: 'None',
    emergencyContact: '+1 (555) 341-8900',
    passcode: '1234',
  },
];

let appointments: Appointment[] = [
  {
    id: 'appt-101',
    appointmentRef: 'ZIV-APP-8841',
    patientName: 'Eleanor Vance',
    email: 'eleanor@example.com',
    phone: '+1 (555) 019-2834',
    mrn: 'ZIV-1001',
    doctorId: 'doc-1',
    serviceId: 'serv-3',
    appointmentDate: '2026-08-10',
    timeSlot: '10:30 AM',
    reasonForVisit: 'Porcelain Veneer Consultation',
    status: 'CONFIRMED',
    createdAt: new Date().toISOString(),
    doctor: doctors[0],
    service: services[2],
  },
  {
    id: 'appt-102',
    appointmentRef: 'ZIV-APP-9912',
    patientName: 'Marcus Sterling',
    email: 'marcus@example.com',
    phone: '+1 (555) 441-2910',
    mrn: 'ZIV-1002',
    doctorId: 'doc-3',
    serviceId: 'serv-5',
    appointmentDate: '2026-08-15',
    timeSlot: '02:30 PM',
    reasonForVisit: 'Invisalign Progress Check',
    status: 'CONFIRMED',
    createdAt: new Date().toISOString(),
    doctor: doctors[2],
    service: services[4],
  },
];

const clinicalRecords: ClinicalRecord[] = [
  {
    id: 'rec-1',
    patientId: 'pat-1',
    visitDate: '2026-05-12',
    doctorName: 'Dr. Hana Bekele, DDS',
    diagnosis: 'Mild localized gingival inflammation. Tooth #16 exhibits minor enamel craze lines.',
    treatmentSummary: 'Ultrasonic scaling, fluoridization, and composite restoration on Tooth #24.',
    doctorNotes: 'Patient advised to maintain nightly flossing routine and soft-bristled brush.',
    paymentStatus: 'PAID IN FULL',
    billAmount: 320.0,
    insuranceClaimed: 240.0,
    xrayImageUrl: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80',
    teethChart: {
      16: { toothNumber: 16, toothName: 'Upper Right 1st Molar', condition: 'Watch', notes: 'Enamel craze lines monitored' },
      24: { toothNumber: 24, toothName: 'Upper Left 1st Premolar', condition: 'Restoration', notes: 'Composite filling completed' },
      11: { toothNumber: 11, toothName: 'Upper Right Central Incisor', condition: 'Crown', notes: 'E-Max Porcelain Crown' },
      46: { toothNumber: 46, toothName: 'Lower Right 1st Molar', condition: 'Implant', notes: 'Titanium Implant placed 2025' },
    },
    prescriptions: [
      {
        medicineName: 'Amoxicillin 500mg',
        dosage: '1 capsule every 8 hours',
        duration: '5 Days',
        instructions: 'Take after meals with a full glass of water.',
      },
      {
        medicineName: 'Chlorhexidine 0.12% Oral Rinse',
        dosage: '15ml rinse twice daily',
        duration: '7 Days',
        instructions: 'Swish for 30 seconds after morning and evening brushing.',
      },
    ],
  },
  {
    id: 'rec-2',
    patientId: 'pat-2',
    visitDate: '2026-06-20',
    doctorName: 'Dr. Selamawit Alemu, BDS',
    diagnosis: 'Class I Malocclusion with mild anterior crowding.',
    treatmentSummary: 'Clear Aligner Scan (3D iTero) & Custom Treatment Plan Generation.',
    doctorNotes: 'Aligner set 1 to 10 fabricated and delivered. Next visit in 4 weeks.',
    paymentStatus: 'PAID IN FULL',
    billAmount: 1800.0,
    insuranceClaimed: 1200.0,
    xrayImageUrl: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80',
    teethChart: {
      31: { toothNumber: 31, toothName: 'Lower Left Central Incisor', condition: 'Watch', notes: 'Slight lingual tilt' },
      41: { toothNumber: 41, toothName: 'Lower Right Central Incisor', condition: 'Watch', notes: 'Aligner attachment fitted' },
    },
    prescriptions: [
      {
        medicineName: 'Ibuprofen 400mg',
        dosage: '1 tablet as needed for minor pressure',
        duration: '3 Days',
        instructions: 'Take with food or milk if aligner pressure causes sensitivity.',
      },
    ],
  },
];

// API ROUTES

// 1. Get Doctors
app.get('/api/doctors', (req, res) => {
  res.json({ success: true, data: doctors });
});

// 2. Get Services
app.get('/api/services', (req, res) => {
  res.json({ success: true, data: services });
});

// 3. Create Appointment
app.post('/api/appointments', (req, res) => {
  const {
    patientName,
    email,
    phone,
    dateOfBirth,
    gender,
    mrn,
    doctorId,
    serviceId,
    appointmentDate,
    timeSlot,
    reasonForVisit,
    notes,
  } = req.body;

  if (!patientName || !email || !doctorId || !serviceId || !appointmentDate || !timeSlot) {
    return res.status(400).json({ success: false, error: 'Missing required booking fields.' });
  }

  const doctor = doctors.find((d) => d.id === doctorId);
  const service = services.find((s) => s.id === serviceId);

  // Assigned or generated MRN
  const assignedMrn = mrn || `ZIV-${Math.floor(1000 + Math.random() * 9000)}`;
  const refCode = `ZIV-APP-${Math.floor(1000 + Math.random() * 9000)}`;

  const newAppt: Appointment = {
    id: `appt-${Date.now()}`,
    appointmentRef: refCode,
    patientName,
    email,
    phone: phone || '',
    dateOfBirth,
    gender,
    mrn: assignedMrn,
    doctorId,
    serviceId,
    appointmentDate,
    timeSlot,
    reasonForVisit,
    notes,
    status: 'CONFIRMED',
    createdAt: new Date().toISOString(),
    doctor,
    service,
  };

  appointments.push(newAppt);

  return res.json({
    success: true,
    mrn: assignedMrn,
    data: newAppt,
  });
});

// 4. Update Appointment Status
app.patch('/api/appointments/:id', (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  const appt = appointments.find((a) => a.id === id);
  if (!appt) {
    return res.status(404).json({ success: false, error: 'Appointment not found.' });
  }

  if (status) {
    appt.status = status;
  }

  return res.json({ success: true, appointment: appt });
});

// 5. Patient Portal Login
app.post('/api/portal/login', (req, res) => {
  const { mrn, passcode } = req.body;

  if (!mrn) {
    return res.status(400).json({ success: false, error: 'Please enter a valid MRN.' });
  }

  const patient = patients.find(
    (p) => p.mrn.toUpperCase() === mrn.trim().toUpperCase() && p.passcode === (passcode || '1234')
  );

  if (patient) {
    return res.json({ success: true, patient });
  }

  // If new MRN created during booking, create a fallback patient record
  const matchingAppts = appointments.filter((a) => a.mrn.toUpperCase() === mrn.trim().toUpperCase());
  if (matchingAppts.length > 0) {
    const firstAppt = matchingAppts[0];
    const createdPatient: Patient = {
      id: `pat-${Date.now()}`,
      mrn: firstAppt.mrn,
      fullName: firstAppt.patientName,
      dateOfBirth: firstAppt.dateOfBirth || '1995-01-01',
      bloodGroup: 'A+',
      allergies: 'None Reported',
      emergencyContact: firstAppt.phone || '+1 (555) 000-0000',
      passcode: passcode || '1234',
    };
    patients.push(createdPatient);
    return res.json({ success: true, patient: createdPatient });
  }

  return res.status(401).json({
    success: false,
    error: 'Invalid MRN or passcode. Try demo account ZIV-1001 with passcode 1234.',
  });
});

// 6. Get Patient Records & Appointments
app.get('/api/portal/records/:patientId', (req, res) => {
  const { patientId } = req.params;

  const patient = patients.find((p) => p.id === patientId);
  const records = clinicalRecords.filter((r) => r.patientId === patientId);

  let patientAppts: Appointment[] = [];
  if (patient) {
    patientAppts = appointments.filter((a) => a.mrn.toUpperCase() === patient.mrn.toUpperCase());
  }

  return res.json({
    success: true,
    records,
    appointments: patientAppts,
  });
});

// Setup Vite middleware for development or static serving in production
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
