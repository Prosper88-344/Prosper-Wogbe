export interface CaseStudy {
  id: string;
  tag: string;
  category: 'hardware' | 'network' | 'systems' | 'security';
  title: string;
  summary: string;
  timeframe: string;
  location: string;
  problem: string;
  diagnosis: string[];
  fix: string[];
  result: string;
  techStack: string[];
}

export interface Strength {
  title: string;
  description: string;
  icon: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  tools: string[];
  icon: string;
}

export interface LabProject {
  id: string;
  badge: string;
  title: string;
  category: string;
  summary: string;
  topology: string;
  keyFeatures: string[];
  skillsDemonstrated: string[];
  commandSnippets?: { title: string; code: string }[];
}

export interface Certification {
  name: string;
  issuer: string;
  program: string;
  issueDate: string;
  certId: string;
  skills: string[];
  status: string;
}

export interface PhoneContact {
  label: string;
  display: string;
  tel: string;
  role: 'primary' | 'secondary';
}

export function buildWhatsAppUrl(tel: string, message: string): string {
  return `https://wa.me/${tel.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;
}

const contactEmail = "prosperw686@gmail.com";
const contactWhatsappMessage = "Hello Prosper, I found your portfolio and would like to talk about an IT role.";
const contactPhones: PhoneContact[] = [
  {
    label: "MTN",
    display: "024 493 7706",
    tel: "+233244937706",
    role: "primary",
  },
  {
    label: "Telecel",
    display: "020 496 5902",
    tel: "+233204965902",
    role: "secondary",
  },
];
const contactLinkedin = "https://www.linkedin.com/in/prosper-wogbe-1178a3297/";
const contactTwitter = "https://x.com/him_atsu?s=21";
const contactTwitterHandle = "@him_atsu";

export type ChannelKind = 'phone' | 'email' | 'social';

export interface ContactChannel {
  id: string;
  label: string;
  kind: ChannelKind;
  display: string;
  tel?: string;
  href?: string;
}

export const contactChannels: ContactChannel[] = [
  {
    id: "mtn",
    label: "MTN",
    kind: "phone",
    display: contactPhones[0].display,
    tel: contactPhones[0].tel,
  },
  {
    id: "telecel",
    label: "Telecel",
    kind: "phone",
    display: contactPhones[1].display,
    tel: contactPhones[1].tel,
  },
  {
    id: "email",
    label: "Email",
    kind: "email",
    display: contactEmail,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    kind: "social",
    display: "in/prosper-wogbe",
    href: contactLinkedin,
  },
  {
    id: "x",
    label: "X",
    kind: "social",
    display: contactTwitterHandle,
    href: contactTwitter,
  },
];

export interface ProfileFact {
  label: string;
  value: string;
}

export const profileFacts: ProfileFact[] = [
  { label: "Role", value: "IT Support Specialist & Systems Administrator" },
  { label: "Experience", value: "Branch IT support · National Investment Bank" },
  { label: "Systems", value: "Windows 10/11 · Active Directory · Windows Server 2022 · Hyper-V" },
  { label: "Networking", value: "Cat6 cabling · LAN testing · VLAN subnetting · Cisco Packet Tracer" },
  { label: "Education", value: "BSc. & Diploma in IT · GCTU" },
  { label: "Based in", value: "Accra, Ghana" },
];

export const profileTools: string[] = [
  "Windows Server",
  "Active Directory",
  "Hyper-V",
  "VLANs",
  "Microsoft 365",
  "Ubuntu",
];

export const profile = {
  facts: profileFacts,
  tools: profileTools,
};

const cvUrl = `${import.meta.env.BASE_URL}assets/Prosper-Wogbe-CV.pdf`;

export const portfolioData = {
  profile,
  personal: {
    fullName: "Prosper Wogbe",
    displayName: "Prosper Wogbe",
    name: "Prosper Wogbe",
    company: "Tassu Technologies",
    roleLine: "Aspiring System Administrator · Founder of Tassu Technologies",
    tagline: "IT Support Specialist & Systems Administrator",
    title: "IT Support Specialist & Systems Administrator",
    titleLine1: "IT Support Specialist",
    titleLine2: "Systems Administrator",
    titleRole: "IT Support Specialist & Systems Administrator",
    titleSecondary: "Systems Administrator",
    specialization: "IT Support | Systems Administration | Networking",
    motto: "Tech that Works",
    location: "Accra, Ghana",
    profileImage: "/assets/profile.webp",
    profileImageAlt: "Portrait of Prosper Wogbe, IT support professional",
    cvUrl,
    lastUpdated: "October 2026",
    availability: {
      status: "Open to IT roles",
      details: "Available for entry-level IT roles in technical support, systems administration, and networking across Accra and remote positions.",
      isOpen: true,
    },
    bio: "Delivered frontline IT support at National Investment Bank, resolving day-to-day hardware, printer, and LAN issues for branch staff and operations.",
    stats: [
      { label: "Hands-on IT Support", value: "Field Experience", subtext: "National Investment Bank" },
      { label: "Hardware & Network", value: "100+ Fixes", subtext: "Printers, Workstations, Cabling" },
      { label: "Degree & Diploma", value: "GCTU Alum", subtext: "BSc. & Diploma in IT" },
      { label: "Response Mindset", value: "< 20 Min", subtext: "Average Branch Ticket Triage" },
    ],
  },

  strengths: [
    {
      title: "Clear, Patient Communication",
      description: "Proven ability to translate complex technical IT problems into plain, accessible terms for diverse staff and end users across various departments.",
      icon: "MessageSquare",
    },
    {
      title: "Calm Under Pressure",
      description: "Thrives in fast-paced operational environments, diagnosing unexpected outages and workstation halts with composure.",
      icon: "ShieldCheck",
    },
    {
      title: "Reliable & Detail-Oriented",
      description: "Strict adherence to organizational standard operating procedures, documentation, and routine maintenance schedules.",
      icon: "CheckCircle",
    },
    {
      title: "Fast Learner",
      description: "Eager and quick to master proprietary business applications, new ticketing tools, and networking environments.",
      icon: "Zap",
    },
  ],

  services: [
    {
      id: "svc-1",
      title: "IT Helpdesk & Troubleshooting",
      description: "Fast, reliable support for Windows 10/11, MS Office, and hardware issues both remotely and onsite. From printer errors to system crashes, focused on quick resolution and clear communication with end-users.",
      tools: ["Windows 10/11", "MS Office", "Remote Desktop", "Hardware Diagnostics"],
      icon: "Headphones",
    },
    {
      id: "svc-2",
      title: "Windows Server & Active Directory",
      description: "Setup and management of Windows Server environments including Active Directory, DNS, DHCP, and Group Policy. Built a home lab with 50+ test user accounts to practice account creation, permissions, and file sharing.",
      tools: ["Active Directory", "DNS", "DHCP", "Group Policy", "Windows Server"],
      icon: "Server",
    },
    {
      id: "svc-3",
      title: "Networking & Wi-Fi Support",
      description: "Configuration of routers, switches, and secure Wi-Fi networks for small offices and homes. Skilled in IP addressing, LAN/WAN troubleshooting, and VPN setup from Cisco NetAcad training.",
      tools: ["Routers & Switches", "LAN/WAN", "VPN", "Cisco NetAcad"],
      icon: "Wifi",
    },
    {
      id: "svc-4",
      title: "Microsoft 365 & Google Workspace Admin",
      description: "Setup and management of Microsoft 365 and Google Workspace for businesses — email, user accounts, Teams, and SharePoint. Includes migration, license management, and security hardening with MFA.",
      tools: ["Microsoft 365", "Google Workspace", "Exchange Online", "SharePoint", "MFA Security"],
      icon: "Cloud",
    },
  ],

  contact: {
    channels: contactChannels,
    email: contactEmail,
    whatsappMessage: contactWhatsappMessage,
    phones: contactPhones,
    linkedin: contactLinkedin,
    twitter: contactTwitter,
    twitterHandle: contactTwitterHandle,
    location: "Accra, Ghana",
    locationDetail: "Accra, Greater Accra Region, Ghana",
    formspreeId: "xblrvkpy",
  },

  experience: [
    {
      role: "IT Support Intern",
      organization: "National Investment Bank (NIB)",
      department: "Dansoman Branch Operations",
      period: "Internship Milestone",
      location: "Accra, Ghana",
      description: "Served as a frontline IT support intern in a high-compliance banking environment as an integral operational milestone in my broader systems administration journey. Collaborated directly with senior IT engineers to ensure continuous uptime and dependable workstation performance across departments.",
      highlights: [
        "Provided first-line desktop and peripheral support for bank staff, diagnosing hardware failures, printer jams, and OS errors.",
        "Assisted in LAN connectivity verification, Ethernet drop testing, and routine workstation health audits.",
        "Documented recurring hardware issues and escalated complex network anomalies following banking standard operating procedures.",
        "Communicated technical recovery steps clearly and calmly to non-technical staff under tight operational deadlines.",
      ],
      skills: ["Desktop Troubleshooting", "LAN Cabling & Testing", "Network Printers", "Windows 10/11 Pro", "Active Directory Support", "Banking SLA"],
    },
    {
      role: "Systems Administration & Home Lab Projects",
      organization: "Independent Technical Labs",
      department: "Infrastructure",
      period: "Ongoing Practice",
      location: "Accra, Ghana",
      description: "Hands-on homelab environment dedicated to practicing Linux administration, Windows Server user and domain setups, and network topology diagnostics.",
      highlights: [
        "Configured Windows Server 2022 instances with domain controllers, organizational units (OUs), and group policies.",
        "Deployed headless Ubuntu Server instances running automated backup scripts and cron job health monitors.",
        "Constructed isolated VLAN topologies in Cisco Packet Tracer to simulate departmental subnets, DHCP routing, and access control lists.",
      ],
      skills: ["Cisco Packet Tracer", "Windows Server 2022", "Active Directory", "Ubuntu Server", "VLANs & Routing"],
    },
  ],

  skillCategories: [
    {
      category: "Systems Administration",
      icon: "Server",
      description: "Server administration fundamentals, user and policy management, system configuration, and client device control.",
      skills: [
        { name: "Systems Administration" },
        { name: "System Configuration & User Management" },
        { name: "Windows Server 2022/2019" },
        { name: "User Access & Permissions" },
        { name: "Linux Administration Basics" },
      ],
    },
    {
      category: "Support & Troubleshooting",
      icon: "Cpu",
      description: "Hardware diagnostics, software maintenance, and day-to-day workstation support.",
      skills: [
        { name: "IT Support & Troubleshooting" },
        { name: "Hardware & Peripheral Maintenance" },
        { name: "Workstation Health & System Checks" },
        { name: "Network Printers & MFDs" },
        { name: "BIOS / UEFI Configuration" },
      ],
    },
    {
      category: "Networking",
      icon: "Network",
      description: "LAN fundamentals, connectivity diagnosis, and client device configuration.",
      skills: [
        { name: "Basic Networking & TCP/IP" },
        { name: "Cabling, Routers & LAN Connectivity" },
        { name: "VLANs & Inter-VLAN Routing" },
        { name: "Network Diagnostics Utilities" },
      ],
    },
    {
      category: "Productivity & Design Tools",
      icon: "Headphones",
      description: "Everyday business computing, documentation, and visual communication.",
      skills: [
        { name: "Microsoft Office Suite" },
        { name: "Microsoft 365 & Google Workspace" },
        { name: "Canva / Visual Design Tools" },
      ],
    },
  ],

  caseStudies: [
    {
      id: "cs-1",
      tag: "Case Study 01 · Layer 1 Network Drop",
      category: "network" as const,
      title: "Bank Branch Network Drop Isolation",
      summary: "Three staff workstations in loan processing lost intermittent access to the core banking application due to physical layer pin strain.",
      timeframe: "National Investment Bank (NIB), Dansoman Branch",
      location: "Corporate Banking LAN (Ethernet & Patch Panels)",
      problem: "Three staff workstations in loan processing reported frequent disconnections and timeout drops while transacting on the core banking system.",
      diagnosis: [
        "Tested physical link lights; green led was flickering intermittently under desk movement.",
        "Connected an RJ-45 cable continuity tester across the wall keystone jack and the server rack patch panel drop.",
        "Tester revealed Pin 3 and Pin 6 had an intermittent open circuit caused by physical strain on the desk faceplate.",
      ],
      fix: [
        "Cut back damaged cable end and re-terminated twisted pair cable using Cat6 T568B punch-down standard.",
        "Punched down conductors with a 110 impact tool and confirmed 8-pin continuity on the cable tester.",
        "Secured cable strain relief behind the desk and reconnected workstation with a certified patch cord.",
      ],
      result: "Link negotiated rock-solid 1Gbps full-duplex with 0% packet loss. Zero banking application timeouts recorded thereafter.",
      techStack: ["Cat6 Termination", "T568B Standard", "110 Punch-down", "Cable Continuity Tester", "Gigabit Ethernet"],
    },
    {
      id: "cs-2",
      tag: "Case Study 02 · Print Spooler Triage",
      category: "systems" as const,
      title: "Print Spooler Crash on Shared Network Printer",
      summary: "Multiple accounting personnel reported recurring spooler crashes when sending batch statements to a shared departmental printer.",
      timeframe: "Client Systems Support",
      location: "Windows 10/11 & Network MFD",
      problem: "Multiple accounting personnel reported recurring spooler crashes when sending batch PDF statements, halting invoice printing.",
      diagnosis: [
        "Inspected Windows Event Viewer Application Log: Event ID 7031 (Print Spooler terminated unexpectedly).",
        "Discovered a corrupted vendor-specific driver holding a mutex lock on spoolsv.exe, stalling subsequent queue jobs.",
        "Checked C:\\Windows\\System32\\spool\\PRINTERS; found corrupt .SHD spool files locking the thread.",
      ],
      fix: [
        "Stopped Print Spooler service via command line (`net stop spooler`).",
        "Cleared all pending corrupt spool files from the spool directory via PowerShell script.",
        "Restarted the service (`net start spooler`) and replaced faulty vendor driver with certified PCL6 universal driver.",
      ],
      result: "Printing restored in under 15 minutes. Batch PDF printing completed with zero lockups.",
      techStack: ["Windows Print Spooler", "PowerShell", "PCL6 Driver", "Event Viewer", "Service Management"],
    },
    {
      id: "cs-3",
      tag: "Case Study 03 · Hardware Diagnostics",
      category: "hardware" as const,
      title: "Workstation BSOD Boot Loop Diagnostic",
      summary: "Workstation halted into a CRITICAL_PROCESS_DIED loop immediately after a mandatory monthly patch cycle.",
      timeframe: "Hardware Diagnostic Lab",
      location: "Dell OptiPlex Desktop Client",
      problem: "A primary administrative workstation halted into a blue screen CRITICAL_PROCESS_DIED loop immediately after rebooting from an OS update.",
      diagnosis: [
        "Booted into WinPE recovery environment to inspect boot configuration and storage health.",
        "Ran storage controller diagnostics: secondary SATA storage channel showed drive timeout errors.",
        "Physical inspection revealed a degraded SATA data cable with bent locking pins causing intermittent read drops.",
      ],
      fix: [
        "Replaced the faulty SATA data cable with a new shielded cable and switched to a clean motherboard SATA port.",
        "Executed `chkdsk /f /r` to repair filesystem metadata errors.",
        "Rebuilt the BCD store using `bootrec /rebuildbcd` and booted into Windows cleanly.",
      ],
      result: "Workstation successfully booted with 100% of user profile and local files intact. Completed in 25 minutes.",
      techStack: ["WinPE Recovery", "CHKDSK", "SATA Diagnostics", "Bootrec", "Hardware Triage"],
    },
  ],

  labs: [
    {
      id: "proj-1",
      badge: "Hands-on Lab · Systems Administration",
      title: "Server Administration Lab",
      category: "Systems Administration",
      summary: "Multi-node server infrastructure deploying Windows Server 2022 alongside Linux utility servers to simulate production domain environments.",
      topology: "Windows Server 2022 Domain Controller (PDC, DNS, DHCP) + Ubuntu Server 22.04 LTS on Host-Only Subnet",
      keyFeatures: [
        "Configured domain controller (CORP.LOCAL) with forest functional level and hierarchical Departmental OUs.",
        "Established role-based access control (RBAC), password complexity policies, and user onboarding scripts.",
        "Configured DNS forwarders and DHCP scope (192.168.10.0/24) with static IP reservations.",
      ],
      skillsDemonstrated: ["Active Directory DS", "Group Policy", "Windows Server 2022", "DHCP/DNS"],
    },
    {
      id: "proj-2",
      badge: "Hands-on Lab · Cisco Packet Tracer",
      title: "Network Topology Simulation & Subnetting",
      category: "Networking",
      summary: "Complex branch network model with router-on-a-stick, VLAN isolation, and inter-VLAN routing.",
      topology: "Cisco 2911 ISR Router + Cisco 2960 Catalyst Switch + Departmental VLAN Workstations",
      keyFeatures: [
        "Implemented 4 segregated departmental VLANs (Management VLAN 10, Operations VLAN 20, Guest VLAN 30, Staff VLAN 40).",
        "Configured Router-on-a-Stick subinterfaces with 802.1Q encapsulation and strict Access Control List (ACL) egress rules.",
        "Configured DHCP pools on router and confirmed end-to-end ICMP connectivity with sub-2ms ping times.",
      ],
      skillsDemonstrated: ["Cisco Packet Tracer", "VLANs", "Inter-VLAN Routing", "ACL Security", "Subnetting"],
    },
    {
      id: "proj-3",
      badge: "Hands-on Lab · Scripting & Health",
      title: "Automated System Health & Backup Daemon",
      category: "Automation & Scripting",
      summary: "Lightweight bash and PowerShell monitoring script suite checking disk volume thresholds, service states, and critical archives.",
      topology: "Ubuntu Server Cron Daemon + Windows Task Scheduler PowerShell Monitor",
      keyFeatures: [
        "Automated disk partition utilization alerts when storage exceeds 85% capacity threshold.",
        "Performs daily differential backups of critical configuration files and database exports.",
        "Logs system uptime and network connectivity status with automated log rotation.",
      ],
      skillsDemonstrated: ["Bash Scripting", "PowerShell", "Cron Jobs", "Task Scheduler", "Health Monitoring"],
    },
  ],

  education: [
    {
      degree: "BSc. in Information Technology",
      institution: "Ghana Communication Technology University (GCTU)",
      location: "Accra, Ghana",
      period: "Completed",
      focus: "Network Engineering, Systems Analysis, Professional IT Management",
      status: "Degree Awarded",
      highlights: [
        "Specialized in Computer Networks, Systems Administration, Database Management, and IT Project Execution.",
        "Practical laboratory research in network design, operating system internals, and physical hardware assembly.",
      ],
    },
    {
      degree: "Diploma in Information Technology",
      institution: "Ghana Communication Technology University (GCTU)",
      location: "Accra, Ghana",
      period: "Completed",
      focus: "Hardware Maintenance, Data Communications, Operating Systems",
      status: "Diploma Awarded",
      highlights: [
        "Comprehensive foundations in Computer Hardware, Networking Fundamentals, Algorithms, and Technical Support.",
      ],
    },
    {
      degree: "Continuous Learning & Self-Study",
      institution: "Professional Certifications Roadmap",
      location: "Accra, Ghana",
      period: "In Progress",
      focus: "CompTIA Network+, Linux Fundamentals, Microsoft Windows Server Administration",
      status: "Active Study",
      highlights: [
        "Preparing for CompTIA Network+ (N10-008) and Azure Fundamentals (AZ-900).",
      ],
    },
  ],

  certifications: [
    {
      name: "Operating Systems Basics",
      issuer: "Cisco Networking Academy",
      program: "Cisco Networking Academy Program",
      issueDate: "31 Jul 2026",
      certId: "b55f0feb-c736-40e2-a406-c8625d5ff5f3",
      skills: ["Operating System Architecture", "Process & Memory Management", "File Systems & Permissions", "Command-Line Navigation", "Troubleshooting & Security"],
      status: "Certified",
    },
  ],

  certificationsAndTraining: [
    {
      title: "CompTIA Network+ (Study in Progress)",
      provider: "CompTIA",
      status: "Actively Preparing",
      focus: "Network Architecture, Routing protocols, Subnetting, Network Security, OSI Model troubleshooting.",
    },
    {
      title: "Operating Systems Basics (Certified)",
      provider: "Cisco Networking Academy",
      status: "Certified 31 Jul 2026",
      focus: "Operating System Architecture, Process & Memory Management, CLI Navigation, Security.",
    },
    {
      title: "Professional IT Support & Helpdesk Operations",
      provider: "National Investment Bank Placement",
      status: "Completed Practical Internship",
      focus: "Hardware diagnosis, banking workstations, peripheral deployment, incident escalation.",
    },
  ],
};
