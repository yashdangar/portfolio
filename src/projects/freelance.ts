import { Project } from "@/types";

export const freelanceProjects: Project[] = [
  {
    id: "shuttle",
    category: "freelance",
    title: "Shuttle - Real-time Hotel Transport System",
    github: "private",
    description:
      "🚧 Ongoing - Complex multi-platform shuttle management system with real-time tracking, WebSocket communications, and Google Maps integration. 6 repositories managing guest transport logistics across hotels.",
    longDescription: `**⚠️ Project Status: Active Development** - An ongoing, sophisticated **real-time shuttle management ecosystem** handling complex hotel transport logistics with multi-platform architecture and live tracking capabilities.
  
## System Architecture:
  
### Multi-Platform Infrastructure (6 Repositories)
  - **Server**: Node.js/Express backend with WebSocket real-time communication
  - **Guest Portal**: Hotel selection and shuttle booking interface
  - **Front Desk System**: Guest verification and request management
  - **Driver Application**: Route management and live tracking interface
  - **Admin Dashboard**: Comprehensive scheduling and analytics platform
  - **Super Admin Panel**: Multi-hotel management and system configuration
  
## Real-time Logistics Flow:
  
### Booking & Verification Process
  1. **Guest Request**: Guest selects hotel and requests shuttle through web portal
  2. **Real-time Notification**: Request instantly appears on front desk system via WebSockets
  3. **Verification**: Front desk verifies guest is staying at the hotel
  4. **Driver Scheduling**: System assigns available drivers and schedules pickup
  5. **Live Updates**: Guest receives real-time ETA and driver location tracking
  
### Advanced Tracking & Optimization
  - **Live Location Tracking**: Real-time Google Maps integration showing driver position
  - **ETA Calculations**: Dynamic time estimates based on traffic and location data
  - **Seat Management**: Automatic handling when shuttle reaches capacity
  - **Route Optimization**: Cost-efficient routing algorithms for multiple pickups
  - **Pickup Precision**: Google Maps-based location selector for exact pickup points
  
### Technical Implementation:
  
### Real-time Communication
  - **WebSocket Architecture**: Instant bi-directional communication across all platforms
  - **Live Synchronization**: Real-time updates for scheduling, location, and status changes
  - **Multi-user Chat**: Integrated communication between front desk, drivers, and guests
  - **Event Broadcasting**: System-wide notifications for booking changes and updates
  
### Google Maps Integration
  - **Live Tracking**: Real-time vehicle location with map visualization
  - **Precise Location Selection**: Advanced pickup point selection interface
  - **Route Optimization**: Intelligent routing for cost and time efficiency
  - **ETA Accuracy**: Dynamic time calculations with traffic data integration
  
### Administrative Features
  - **Full UI Calendar**: Comprehensive event scheduling with drag-and-drop interface
  - **Analytics Dashboard**: Detailed performance metrics and operational insights
  - **Multi-hotel Management**: Super admin controls for creating and managing hotel properties
  - **Driver Performance**: Tracking and analytics for driver efficiency and ratings
  
## Advanced System Features:
  
### Capacity & Resource Management
  - **Intelligent Scheduling**: Automatic driver assignment based on availability and location
  - **Seat Optimization**: Real-time capacity management with overflow handling
  - **Multi-hotel Coordination**: Cross-property shuttle sharing for efficiency
  - **Peak Time Management**: Dynamic resource allocation during high-demand periods
  
### User Experience Optimization
  - **Role-based Interfaces**: Customized dashboards for each user type (guest, driver, admin)
  - **Mobile-first Design**: Responsive interfaces optimized for on-the-go usage
  - **Intuitive Workflows**: Streamlined processes for quick booking and management
  - **Real-time Feedback**: Instant status updates and notifications throughout the journey
  
## Deployment & Infrastructure:
  - **AWS VM Deployment**: Complete end-to-end deployment on cloud infrastructure
  - **Scalable Architecture**: Built to handle multiple hotels and high concurrent usage
  - **Performance Optimization**: Efficient WebSocket management and database queries
  - **Security Implementation**: Secure communication and data protection across all platforms
  
## Business Impact:
  Revolutionizing hotel transport logistics by providing guests with Uber-like convenience while giving hotels complete control over their shuttle operations. The system reduces operational costs through intelligent routing while significantly improving guest satisfaction through real-time tracking and communication.
  
  *This project demonstrates expertise in complex real-time systems, multi-platform development, advanced mapping integration, and sophisticated logistics management - showcasing the ability to build enterprise-level transportation solutions.*`,
    tags: [
      "Real-time",
      "WebSockets",
      "Google Maps",
      "Multi-Platform",
      "Logistics",
      "Hotel Management",
    ],
    features: [
      "Real-time WebSocket communication across 6 platforms",
      "Live Google Maps tracking and location selection",
      "Multi-role management (Guest, Driver, Front Desk, Admin, Super Admin)",
      "Advanced seat capacity and resource optimization",
      "Integrated chat system between all user types",
      "Full UI calendar with comprehensive event scheduling",
      "AWS VM deployment with scalable architecture",
      "Dynamic ETA calculations and route optimization",
      "Multi-hotel management and analytics dashboard",
      "Precise pickup location selector with Google Maps integration",
    ],
    techStack: [
      "Node.js",
      "Express.js",
      "WebSockets",
      "Next.js",
      "Google Maps API",
      "AWS VM",
      "Real-time Analytics",
      "Multi-Platform Architecture",
    ],
    date: "Jul 22, 2025",
    repoCount: 6,
  },  
  {
    id: 'cyro-technologies',
  category: 'freelance',
  title: 'Cyro Technologies',
  github: 'private',
  description:
    'Complex Purchase Order management system for US-based client. Features 100+ field forms, hierarchical approval workflows, PDF generation, and comprehensive admin analytics.',
  longDescription: `A sophisticated **enterprise Purchase Order management system** built for a US-based client, featuring complex approval hierarchies and comprehensive business logic.

## Project Overview:
Complete enterprise-level solution for managing purchase orders with advanced workflow automation, document generation, and multi-tier approval systems.

## Core System Features:

### Complex Form Management
- **100+ Field Forms**: Comprehensive purchase order forms with extensive data collection
- **Dynamic PDF Generation**: Real-time PDF creation from form data
- **Document Storage**: Secure S3 integration for PDF storage and retrieval
- **Multi-format Export**: Flexible document generation and download capabilities

### Hierarchical Approval System
Built **dual approval workflows** to handle different business scenarios:

#### Linear Hierarchy
- **Sequential Approval**: Step-by-step approval process through predefined chain
- **Status Tracking**: Real-time status updates through each approval stage
- **Escalation Logic**: Automatic escalation based on business rules

#### Tree-Based Hierarchy  
- **Complex Routing**: Multi-branch approval paths based on PO criteria
- **Parallel Processing**: Multiple approvers at different levels simultaneously
- **Conditional Logic**: Dynamic routing based on PO amount, type, and other factors

### Advanced Business Logic
- **Credit Management**: Complex credit allocation and tracking system
- **PO Release Logic**: Automated release mechanisms with business rule validation
- **Associated POs**: Linking and management of related purchase orders
- **Financial Controls**: Budget validation and spending limit enforcement

## Technical Architecture:

### Full-Stack Implementation
- **Dual Panel System**: Separate admin and user interfaces with role-based access
- **Authentication**: Secure NextAuth implementation with role management
- **Responsive Design**: Mobile-first approach with comprehensive device support

### Communication & Notifications
- **SMTP Integration**: Automated email notifications throughout approval workflow
- **Status Updates**: Real-time notifications for all stakeholders
- **Document Sharing**: Secure PDF distribution to relevant parties

### Analytics & Reporting
- **Comprehensive Dashboard**: Admin analytics with detailed insights
- **Advanced Filtering**: 10+ filter options for data analysis
- **Performance Metrics**: KPI tracking and reporting capabilities
- **Data Visualization**: Charts and graphs for business intelligence

## Workflow Process:
1. **Creation**: User creates PO with 100+ field form
2. **Submission**: Initial submission to designated reviewer
3. **Review Cycle**: Multi-level review with rejection/approval options
4. **Status Updates**: Real-time tracking through approval hierarchy
5. **Final Approval**: Admin-level final approval process
6. **Release**: Automated PO release with all stakeholders notified

## Business Impact:
- **Streamlined Operations**: Reduced manual processing time by automating complex workflows
- **Enhanced Compliance**: Built-in approval controls ensure regulatory compliance
- **Improved Visibility**: Real-time tracking provides complete process transparency
- **Cost Control**: Advanced credit and release logic prevents overspending
- **Scalable Solution**: Architecture designed to handle enterprise-level transaction volumes

## Client Satisfaction:
Successfully delivered a production-ready enterprise solution that transformed the client's purchase order management process, providing significant operational efficiency improvements.`,
  tags: [
    'Enterprise',
    'Workflow Management',
    'PDF Generation',
    'Freelance',
    'Business Logic',
  ],
  features: [
    'Complex 100+ field purchase order forms',
    'Dual hierarchical approval systems (linear and tree-based)',
    'Automated PDF generation and S3 document storage',
    'Advanced credit management and PO release logic',
    'Comprehensive admin analytics with 10+ filters',
    'SMTP email notifications and workflow automation',
    'Role-based authentication with admin and user panels',
    'Responsive design with enterprise-grade UI/UX',
  ],
  techStack: [
    'Next.js',
    'NextAuth',
    'AWS S3',
    'PDF Generation',
    'SMTP',
    'Analytics',
    'Database Management',
  ],
  date: 'Jul 15, 2025',
  repoCount: 1,
  },
  {
    id: 'agency-portfolio',
    category: 'freelance',
    title: 'Software Development Agency Portfolio',
    github: 'private',
    href: 'https://agency-portfolio-murex.vercel.app/',
    description:
      '⚠️ In Development - Sophisticated agency portfolio website with animation-heavy design. Built with Next.js and Framer Motion for a software development agency client.',
    longDescription: `A **modern agency portfolio website** built for a software development agency client, featuring sophisticated animations and minimal design aesthetics.
  
## Project Overview:
  Professional portfolio website designed to showcase the client's software development services and establish a strong digital presence in the competitive agency market.
  
## Technical Implementation:
  
### Animation & User Experience
  - **Framer Motion Integration**: Smooth, performance-optimized animations throughout the site
  - **Subtle Interactions**: Carefully crafted micro-interactions that enhance user engagement
  - **Minimal Design**: Clean, professional aesthetic that lets the work speak for itself
  - **Animation-Heavy Interface**: Rich motion design without compromising performance
  
### Modern Web Technologies
  - **Next.js Framework**: Server-side rendering and optimal performance
  - **Responsive Design**: Seamless experience across all devices and screen sizes
  - **Performance Optimization**: Fast loading times with smooth animations
  - **Professional Polish**: Enterprise-level design and development standards
  
## Design Philosophy:
  - **Subtle Elegance**: Minimal approach with strategic use of animations
  - **Professional Focus**: Clean design that emphasizes the agency's capabilities
  - **User-Centric**: Intuitive navigation and engaging user interactions
  - **Brand Alignment**: Design that reflects the client's software development expertise
  
## Client Value:
  Delivering a sophisticated web presence that positions the client's software development agency as a premium, modern technology partner for potential clients.`,
    tags: [
      'Agency Portfolio',
      'Framer Motion',
      'Animations',
      'Freelance',
      'Minimal Design',
    ],
    features: [
      'Animation-heavy interface with Framer Motion',
      'Subtle and sophisticated micro-interactions',
      'Minimal, professional design aesthetic',
      'Responsive design optimized for all devices',
      'Performance-optimized animations and interactions',
      'Modern Next.js architecture for optimal performance',
    ],
    techStack: [
      'Next.js',
      'Framer Motion',
      'TypeScript',
      'Responsive Design',
      'Performance Optimization',
    ],
    date: 'Jul 8, 2025',
    repoCount: 1,
  },
  {
    id: 'helpbharat',
    category: 'freelance',
    title: 'Helpbharat',
    github: 'private',
    description:
      'Complex multi-frontend deployment project with comprehensive bug resolution. Managed 3 React frontends, 1 Express.js backend, and resolved 25+ critical bugs. Worked on 20+ API routes within a large-scale system containing 200+ total routes.',
    longDescription: `A comprehensive **multi-platform deployment and optimization project** involving complex system architecture, extensive bug resolution, and professional deployment management for a confidential client.
  
## Project Scope & Complexity:
  
### Multi-Platform Architecture
  - **3 Frontend Applications**: Distinct React applications serving different user roles and functionalities
  - **1 Backend System**: Centralized Express.js/Node.js backend handling all business logic
  - **Unified Deployment**: Coordinated deployment strategy across multiple platforms
  - **Large-Scale System**: 200+ total backend API routes in system, worked on 20+ routes with 40+ combined frontend routes
  
## Deployment Infrastructure:
  
### Platform Management
  - **NGO Panel**: Specialized interface for organizational management and operations
  - **Main Website**: Public-facing platform with optimized user experience
  - **Admin Panel**: Comprehensive administrative control system with advanced features
  - **Backend API**: Centralized server handling authentication, data management, and business logic
  
### Technical Architecture
  - **React Frontend Stack**: Modern React applications with optimized performance
  - **Express.js Backend**: Robust API server with comprehensive route handling
  - **Database Integration**: Efficient data management and query optimization
  - **Cross-Platform Communication**: Seamless data flow between all system components
  
## Critical Problem Resolution:
  
### Bug Resolution Expertise
  - **25+ Critical Bugs Resolved**: Comprehensive debugging and problem-solving across the entire system
  - **Complex Issues (5)**: Tackled sophisticated problems requiring deep technical analysis
  - **Standard Fixes (20)**: Efficiently resolved common issues and optimization opportunities
  - **System Stability**: Achieved stable, production-ready performance across all platforms
  
### Technical Challenges
  - **Cross-Platform Compatibility**: Ensured seamless functionality across different frontend applications
  - **API Integration**: Debugged and optimized complex API interactions and data flow
  - **Performance Issues**: Resolved bottlenecks and improved system responsiveness
  - **Deployment Conflicts**: Managed and resolved deployment pipeline issues
  
## Professional Delivery:
  
### Confidential Project Management
  - **Private Codebase**: Maintained strict confidentiality and professional discretion
  - **Client Communication**: Regular updates and transparent progress reporting
  - **Quality Assurance**: Thorough testing and validation of all fixes and deployments
  - **Production Readiness**: Delivered stable, scalable solutions ready for live use
  
### System Optimization
  - **Code Quality**: Improved code maintainability and performance across all platforms
  - **Error Handling**: Implemented robust error management and user feedback systems
  - **Security Measures**: Ensured secure data handling and user authentication
  - **Scalability**: Built solutions capable of handling growing user demands
  
## Technical Impact:
  Successfully transformed a complex, bug-ridden multi-platform system into a stable, efficient, and scalable solution. Demonstrated expertise in full-stack debugging, deployment management, and cross-platform system integration.
  
  *This project showcases advanced problem-solving skills, technical expertise, and the ability to handle complex, multi-faceted development challenges while maintaining professional confidentiality.*`,
    tags: [
      'Multi-Platform',
      'Bug Resolution',
      'Deployment',
      'System Architecture',
      'Freelance',
    ],
    features: [
      'Multi-platform deployment management (3 frontends + 1 backend)',
      'Comprehensive bug resolution across 25+ critical issues',
      'API debugging and optimization within large-scale 200+ route system',
      'Cross-platform React application development',
      'Advanced debugging and system optimization',
      'Professional confidential project handling',
      'Production-ready deployment and maintenance',
    ],
    techStack: [
      'React',
      'Express.js',
      'Node.js',
      'Multi-Platform Deployment',
      'API Architecture',
      'System Debugging',
    ],
    date: 'Jun 30, 2025',
    websites: [
      'https://ash-deployment.vercel.app',
      'https://ash-deployment-pbq6.vercel.app/',
      'https://ash-deployment-hhwm.vercel.app/',
    ],
    repoCount: 4,
  },
  {
    id: 'twilio-call',
    category: 'freelance',
    title: 'Twilio Call Management System',
    github: 'private',
    href: 'https://call-managment.vercel.app',
    repoCount: 1,
    description:
      'Advanced telephony solution with bidirectional calling, automatic recording, AI transcription, and dynamic form analysis. Supports international calls with intelligent data extraction.',
    longDescription: `A comprehensive **telephony management system** built with Twilio API integration, featuring advanced call handling, AI-powered transcription, and intelligent data extraction capabilities.
  
## Project Overview:
  Complete communication platform enabling seamless voice communication with automated recording, transcription, and AI-powered data analysis for business operations.
  
## Core Communication Features:
  
### Bidirectional Call System
  - **Outbound Calls**: Admin can initiate calls directly from website to any international number
  - **Inbound Calls**: Client calls redirect through Twilio number to admin phone
  - **International Support**: Global calling capabilities with full feature support
  - **Web-based Interface**: Complete call management through browser interface
  
### Advanced Recording & Transcription
  - **Automatic Recording**: All calls automatically recorded for quality and analysis
  - **Real-time Transcription**: AI-powered speech-to-text conversion of call recordings
  - **Intelligent Processing**: Automated analysis of conversation content
  - **Secure Storage**: Call recordings and transcripts securely stored and managed
  
## AI-Powered Data Extraction:
  
### Dynamic Form System
  - **Admin-Configurable Forms**: Flexible form builder allowing admin to customize data collection
  - **AI Form Analysis**: OpenAI API integration for intelligent transcript analysis
  - **Automated Data Extraction**: AI automatically extracts relevant information from call transcripts
  - **Form Responses**: System generates structured data based on transcript content
  
### OpenAI Integration
  - **Custom API Implementation**: Integrated OpenAI API for advanced language processing
  - **Context Understanding**: AI analyzes call context to provide accurate form responses
  - **Dynamic Processing**: Adapts to different form configurations and question types
  - **Intelligent Matching**: Maps conversation content to specific form fields automatically
  
## Technical Architecture:
  
### Twilio API Integration
  - **Voice API**: Complete voice calling functionality with international support
  - **Recording API**: Automated call recording with secure storage
  - **Programmable Voice**: Custom call flow management and routing
  - **Webhook Integration**: Real-time call status and event handling
  
### Call Flow Management
  1. **Outbound Process**: Admin initiates call → Twilio connects → Recording starts → Transcription → AI analysis
  2. **Inbound Process**: Client calls Twilio number → Routes to admin → Recording → Transcription → AI analysis
  3. **Data Processing**: Transcripts analyzed against dynamic forms → Structured data generated
  
### Admin Dashboard
  - **Call Management**: Complete interface for managing inbound and outbound calls
  - **Form Builder**: Dynamic form creation and configuration tools
  - **Analytics**: Call statistics, transcription accuracy, and performance metrics
  - **Data Export**: Structured data export from AI-analyzed conversations
  
## Advanced Features:
  - **Real-time Call Control**: Live call management and monitoring capabilities
  - **Custom Form Fields**: Unlimited flexibility in form design and data collection
  - **AI Accuracy**: Intelligent processing ensures high-quality data extraction
  - **Scalable Architecture**: Built to handle high-volume call operations
  
## Business Applications:
  - **Lead Qualification**: Automated extraction of prospect information
  - **Customer Service**: Intelligent call analysis and data collection
  - **Sales Support**: Automatic logging of sales conversations and outcomes
  - **Quality Assurance**: Call recording and analysis for training purposes
  
## Technology Integration:
  Advanced integration of multiple APIs and services to create a seamless communication platform that bridges voice communication with intelligent data processing.`,
    tags: ['Twilio', 'AI', 'Telephony', 'Transcription', 'OpenAI', 'Freelance'],
    features: [
      'Bidirectional calling system (inbound and outbound)',
      'International call support with full feature set',
      'Automatic call recording and secure storage',
      'AI-powered real-time transcription of conversations',
      'Dynamic form builder with admin configuration',
      'OpenAI API integration for intelligent data extraction',
      'Web-based call management interface',
      'Automated form responses from call transcripts',
    ],
    techStack: [
      'Twilio API',
      'OpenAI API',
      'Next.js',
      'Speech-to-Text',
      'Webhook Integration',
      'AI Processing',
    ],
    date: 'May 20, 2025',
  },
  {
    id: 'visualizenbuild-bugs',
    category: 'freelance',
    title: 'VisualizeNBuild Bug Resolution & Admin Panel',
    github: 'private',
    description:
      'Bug bounty project with comprehensive issue resolution and custom admin panel development. Resolved 10+ critical bugs including complex issues, plus built and deployed a complete franchise admin panel.',
    longDescription: `A comprehensive **bug resolution and development project** for VisualizeNBuild involving critical system debugging and custom administrative panel creation for franchise operations.
  
## Project Overview:
  Multi-faceted engagement combining intensive bug hunting and resolution with ground-up development of a specialized administrative system for franchise management.
  
## Bug Resolution Expertise:
  
### Critical Issue Resolution
  - **10+ System Bugs Identified and Resolved**: Comprehensive debugging across the platform
  - **Complex Technical Challenges (3-4)**: Tackled sophisticated issues requiring advanced problem-solving
  - **Standard Bug Fixes**: Efficiently resolved common system issues and optimization opportunities
  - **System Stability**: Improved platform reliability and user experience
  
### Technical Problem-Solving
  - **Deep System Analysis**: Thorough investigation of platform architecture and functionality
  - **Root Cause Identification**: Advanced debugging techniques to locate core issues
  - **Solution Implementation**: Professional code fixes and system improvements
  - **Quality Assurance**: Comprehensive testing and validation of all resolved issues
  
## Custom Development Work:
  
### Franchise Admin Panel Creation
  - **Complete New Repository**: Built entirely new codebase from scratch
  - **Administrative Interface**: Comprehensive management system for franchise operations
  - **Custom Architecture**: Tailored solution designed specifically for business requirements
  - **Full Development Cycle**: From initial planning through production deployment
  
### Technical Implementation
  - **Modern Development Stack**: Professional-grade architecture and coding standards
  - **Scalable Design**: Built for growth and expanding franchise operations
  - **User-Centric Interface**: Intuitive administrative workflows and functionality
  - **Production Deployment**: Complete deployment pipeline and live system delivery
  
## Professional Delivery:
  
### Confidential Project Management
  - **Secure Development**: Maintained strict confidentiality throughout engagement
  - **Client Collaboration**: Regular communication and progress updates
  - **Professional Standards**: High-quality code and comprehensive documentation
  - **Timely Delivery**: Met all project milestones and deployment deadlines
  
### System Integration
  - **Platform Compatibility**: Ensured seamless integration with existing systems
  - **Data Security**: Implemented robust security measures and access controls
  - **Performance Optimization**: Optimized for speed and reliability
  - **Maintenance Ready**: Built for easy future updates and modifications
  
## Technical Impact:
  Successfully resolved critical system issues while delivering a complete administrative solution. Demonstrated expertise in both debugging complex technical problems and building scalable applications from concept to production.
  
  *This project showcases advanced debugging skills, full-stack development capabilities, and the ability to deliver both problem resolution and innovative solutions under confidential client requirements.*`,
    tags: [
      'Bug Resolution',
      'Admin Panel',
      'Freelance',
      'System Architecture',
      'Franchise Management',
    ],
    features: [
      'Comprehensive bug hunting and resolution (10+ issues)',
      'Complex technical problem-solving and system debugging',
      'Complete franchise admin panel development from scratch',
      'Full deployment pipeline and production launch',
      'Advanced debugging and optimization techniques',
      'Professional confidential project management',
      'Scalable administrative interface design',
    ],
    techStack: [
      'System Debugging',
      'Full-Stack Development',
      'Admin Panel Development',
      'Deployment Management',
      'Bug Resolution',
    ],
    date: 'Jul 10, 2025',
    websites: [
      'https://vendor.visualizenbuild.com/login',
      'https://visualizenbuild.com',
    ],
    repoCount: 4
  }
];
