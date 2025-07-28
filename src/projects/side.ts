import { Project } from "@/types";

export const sideProjects: Project[] = [
  {
    id: 'gym-management-system',
    category: 'side',
    title: 'GYM Management System',
    github: 'https://github.com/yashdangar/GYM-Management-system',
    repoCount: 1,
    description:
      'Comprehensive gym management platform with member tracking, trainer management, attendance monitoring, payment processing, and automated invoice generation. Features real-time analytics and follow-up management.',
    longDescription: `A complete **gym management solution** built with modern web technologies, featuring comprehensive member and trainer management, automated billing, attendance tracking, and intelligent analytics for fitness business operations.
  
## Project Overview:
    Full-stack gym management platform enabling seamless operations for fitness centers with automated processes, real-time monitoring, and comprehensive reporting capabilities.
  
## Core Management Features:
  
### Member Management System
    - **Profile Management**: Complete member profiles with personal information, membership details, and profile images
    - **Membership Tiers**: Four-tier membership system (Bronze, Silver, Gold, Platinum) with automatic duration calculation
    - **Image Upload**: Cloudinary integration for secure profile image storage and management
    - **Status Tracking**: Active/inactive member status management with comprehensive filtering
  
### Trainer Management
    - **Trainer Profiles**: Complete trainer information management with personal details and contact information
    - **Profile Images**: Secure image upload and storage for trainer profiles
    - **Status Management**: Active/inactive trainer status tracking and management
    - **Contact Integration**: Direct communication capabilities with trainer contact information
  
## Financial Management:
  
### Payment & Invoice System
    - **Automated Billing**: Automatic invoice generation based on membership type and duration
    - **Payment Tracking**: Comprehensive payment status tracking (paid, due, total amounts)
    - **PDF Generation**: Automated invoice PDF generation using jsPDF and easyinvoice
    - **Financial Analytics**: Real-time financial reporting with income, dues, and payment statistics
  
### Membership Pricing
    - **Tier-based Pricing**: Bronze (1 month), Silver (3 months), Gold (6 months), Platinum (12 months)
    - **Automatic Calculations**: Dynamic pricing and duration calculations based on membership type
    - **Due Amount Tracking**: Real-time tracking of outstanding payments and dues
  
## Operational Features:
  
### Attendance Management
    - **Daily Tracking**: Daily attendance recording with present member counts
    - **Visual Analytics**: Chart.js integration for attendance trend visualization
    - **Historical Data**: 7-day attendance history with graphical representation
    - **Real-time Updates**: Live attendance data updates and management
  
### Follow-up System
    - **Lead Management**: Comprehensive follow-up tracking for enquiries, fee dues, and trial members
    - **Status Tracking**: Follow-up status management with completion tracking
    - **Notes System**: Detailed notes and communication tracking for each follow-up
    - **Type Categorization**: Organized follow-up types (Enquiry, Fee Due, Trial)
  
## Analytics & Reporting:
  
### Dashboard Analytics
    - **Real-time Metrics**: Live dashboard with member count, trainer count, income, and dues
    - **Visual Charts**: Interactive charts for attendance trends and business metrics
    - **Financial Overview**: Comprehensive financial dashboard with income and payment statistics
    - **Performance Indicators**: Key performance indicators for business monitoring
  
### Sales Analytics
    - **Revenue Tracking**: Total income, paid money, and unpaid money tracking
    - **Membership Analytics**: Detailed breakdown of membership tier distributions
    - **Financial Reporting**: Comprehensive financial reports and analytics
    - **Business Intelligence**: Data-driven insights for business decision making
  
## Technical Architecture:
  
### Backend Infrastructure
    - **Node.js & Express**: Robust server-side architecture with RESTful API design
    - **MongoDB Integration**: Scalable NoSQL database with Mongoose ODM
    - **Authentication**: Secure admin authentication with JWT and bcrypt
    - **File Management**: Cloudinary integration for secure image storage and management
  
### Frontend Technology
    - **React.js**: Modern single-page application with component-based architecture
    - **Tailwind CSS**: Responsive design with utility-first CSS framework
    - **Chart.js**: Interactive data visualization for analytics and reporting
    - **Material Tailwind**: Enhanced UI components with Material Design principles
  
### API Integration
    - **RESTful APIs**: Comprehensive API endpoints for all management operations
    - **Data Validation**: Zod schema validation for robust data integrity
    - **Error Handling**: Comprehensive error handling and user feedback
    - **Security**: Secret key authentication and secure data transmission
  
## Advanced Features:
    - **Responsive Design**: Mobile-first responsive design for all device types
    - **Real-time Updates**: Live data updates without page refresh
    - **PDF Generation**: Automated invoice and report generation
    - **Image Processing**: Sharp integration for optimized image handling
    - **Data Export**: Comprehensive data export and reporting capabilities
  
## Business Applications:
    - **Fitness Centers**: Complete gym and fitness center management
    - **Health Clubs**: Comprehensive health club operations management
    - **Personal Training**: Trainer and client relationship management
    - **Franchise Management**: Multi-location gym franchise operations
  
## Technology Integration:
    Advanced integration of modern web technologies to create a comprehensive gym management platform that streamlines operations, enhances member experience, and provides actionable business insights.`,
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS', 'Fullstack'],
    features: [
      'Complete member and trainer profile management with image upload',
      'Four-tier membership system with automatic duration calculation',
      'Automated invoice generation and PDF creation',
      'Real-time attendance tracking with visual analytics',
      'Comprehensive follow-up management system',
      'Financial analytics and payment tracking',
      'Responsive dashboard with live metrics and charts',
      'Secure authentication and data validation',
    ],
    techStack: [
      'React.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Tailwind CSS',
      'Chart.js',
      'Cloudinary',
      'jsPDF',
    ],
    date: 'January 15, 2025',
  },
  {
    id: "realtime-chatapp",
    category: "side",
    title: "Real-Time Chat Application",
    github: "https://github.com/yashdangar/ChatApp",
    repoCount: 1,
    description: "Modern real-time chat application with WebSocket communication, room-based messaging, and responsive design. Features dark/light theme switching and intuitive user interface.",
    longDescription: `A **real-time chat application** built with modern web technologies, featuring instant messaging capabilities, room-based communication, and a responsive user interface with theme customization.
  
## Project Overview:
    Complete real-time messaging platform enabling instant communication between users through WebSocket connections, with room-based organization and modern UI/UX design.
  
## Core Communication Features:
  
### Real-Time Messaging System
    - **WebSocket Integration**: Instant bidirectional communication using WebSocket protocol
    - **Room-Based Chat**: Users can create and join specific chat rooms with unique codes
    - **Live Message Broadcasting**: Messages instantly appear to all users in the same room
    - **User Identification**: Personalized messaging with custom usernames
  
### Room Management System
    - **Dynamic Room Creation**: Generate unique 6-character room codes automatically
    - **Room Joining**: Users can join existing rooms using room codes
    - **Room Code Sharing**: Easy sharing functionality with clipboard integration
    - **Room Isolation**: Messages are isolated to specific rooms for privacy
  
## User Interface & Experience:
  
### Modern Design System
    - **Responsive Layout**: Optimized for desktop and mobile devices
    - **Theme Switching**: Toggle between light and dark themes with persistent storage
    - **Clean Typography**: Monospace font for consistent, readable messaging
    - **Smooth Animations**: CSS transitions and loading states for better UX
  
### Interactive Features
    - **Real-Time Updates**: Live message display without page refresh
    - **Copy to Clipboard**: One-click room code sharing functionality
    - **Loading States**: Visual feedback during room creation and connection
    - **Keyboard Shortcuts**: Enter key support for quick message sending
  
## Technical Architecture:
  
### Frontend Implementation
    - **React 18**: Modern React with hooks and functional components
    - **TypeScript**: Type-safe development with comprehensive type definitions
    - **Vite**: Fast development server and optimized build process
    - **Tailwind CSS**: Utility-first CSS framework for responsive design
    - **React Router**: Client-side routing for seamless navigation
  
### Backend Implementation
    - **Node.js**: Server-side JavaScript runtime
    - **WebSocket Server**: Real-time communication using 'ws' library
    - **TypeScript**: Type-safe backend development
    - **Room Management**: Efficient room-based message routing
  
### WebSocket Communication Flow
    1. **Connection**: Client connects to WebSocket server on port 8080
    2. **Room Join**: Client sends join message with name and room ID
    3. **Message Broadcasting**: Messages are broadcasted to all users in the same room
    4. **Real-Time Updates**: All connected clients receive instant message updates
  
## Advanced Features:
  
### Theme System
    - **Context API**: React Context for global theme state management
    - **Local Storage**: Persistent theme preference across sessions
    - **CSS Variables**: Dynamic theme switching with CSS custom properties
    - **Smooth Transitions**: Animated theme changes for better UX
  
### User Experience Enhancements
    - **Input Validation**: Form validation for name and room code requirements
    - **Error Handling**: Graceful error handling for connection issues
    - **Loading Indicators**: Visual feedback during async operations
    - **Responsive Design**: Mobile-first approach with breakpoint optimization
  
## Development Features:
  
### Modern Development Stack
    - **ESLint**: Code quality and consistency enforcement
    - **PostCSS**: CSS processing and optimization
    - **Autoprefixer**: Automatic CSS vendor prefixing
    - **TypeScript Configuration**: Strict type checking and modern JavaScript features
  
### Build & Deployment
    - **Vite Build**: Optimized production builds with tree shaking
    - **TypeScript Compilation**: Type-safe compilation with strict settings
    - **Asset Optimization**: Automatic asset optimization and compression
    - **Development Server**: Hot module replacement for fast development
  
## Business Applications:
    - **Team Collaboration**: Real-time team communication and coordination
    - **Customer Support**: Instant customer service chat functionality
    - **Educational Platforms**: Live classroom discussions and Q&A sessions
    - **Social Networking**: Private group conversations and community building
  
## Technology Integration:
    Seamless integration of modern web technologies to create a responsive, real-time communication platform that prioritizes user experience and performance.`,
    tags: ["React", "TypeScript", "WebSocket", "Real-time", "Chat", "Vite", "Tailwind"],
    features: [
      "Real-time messaging with WebSocket communication",
      "Room-based chat system with unique room codes",
      "Dark/light theme switching with persistent storage",
      "Responsive design optimized for all devices",
      "One-click room code sharing with clipboard integration",
      "Modern UI with smooth animations and transitions",
      "Type-safe development with TypeScript",
      "Instant message broadcasting to room participants"
    ],
    techStack: [
      "React 18",
      "TypeScript",
      "WebSocket API",
      "Node.js",
      "Vite",
      "Tailwind CSS",
      "React Router",
      "Lucide React Icons"
    ],
    date: "December 2024"
  },
  {
    id: "course-selling-app",
    category: "side",
    title: "Course Selling Platform",
    github: "https://github.com/yashdangar/Course-Selling-app",
    repoCount: 1,
    description: "Full-stack e-learning marketplace with dual user roles, secure authentication, course management, and integrated payment processing. Features admin course creation and user purchase tracking.",
    longDescription: `A comprehensive **e-learning marketplace** built with React frontend and Node.js backend, featuring dual user authentication, course management, and secure payment processing for educational content distribution.
  
## Project Overview:
  Complete course selling platform enabling educators to create and sell courses while providing students with a seamless learning marketplace experience with integrated payment and course management capabilities.
  
## Core Platform Features:
  
### Dual User Authentication System
  - **Admin Portal**: Educators can create accounts to publish and manage their courses
  - **Student Portal**: Learners can register to browse and purchase courses
  - **Secure Authentication**: JWT-based authentication with bcrypt password hashing
  - **Role-Based Access**: Separate interfaces and permissions for admins and users
  - **Session Management**: Persistent login state with Redux and localStorage
  
### Course Management System
  - **Course Creation**: Admin interface for adding new courses with title, description, pricing, and images
  - **Course Editing**: Full CRUD operations for course content management
  - **Course Publishing**: Admin dashboard to view and manage published courses
  - **Course Preview**: Public course browsing with detailed information display
  - **Image Integration**: Support for course cover images via URL input
  
## E-commerce & Payment Features:
  
### Purchase Management
  - **Course Browsing**: Users can view all available courses with detailed information
  - **Purchase Processing**: Integrated payment system for course transactions
  - **Purchase History**: Users can view their purchased courses and access them
  - **Transaction Tracking**: Complete purchase records with user-course relationships
  
### Payment Integration
  - **Payment Interface**: Dedicated payment component with course details
  - **Transaction Confirmation**: Real-time purchase confirmation and validation
  - **Purchase Verification**: Backend validation of payment transactions
  - **Course Access**: Immediate access to purchased courses after payment
  
## Technical Architecture:
  
### Frontend Technology Stack
  - **React.js**: Modern component-based UI with functional components and hooks
  - **Redux Toolkit**: State management with persistent storage for user sessions
  - **React Router**: Client-side routing with nested routes and dynamic parameters
  - **Tailwind CSS**: Utility-first CSS framework for responsive design
  - **Axios**: HTTP client for API communication with backend services
  
### Backend Technology Stack
  - **Node.js**: Server-side JavaScript runtime with Express.js framework
  - **MongoDB**: NoSQL database with Mongoose ODM for data modeling
  - **JWT Authentication**: Secure token-based authentication system
  - **bcrypt**: Password hashing for secure user credential storage
  - **Zod**: Schema validation for request data integrity
  
### Database Schema Design
  - **User Model**: Email and hashed password storage for student accounts
  - **Admin Model**: Separate authentication for course creators
  - **Course Model**: Title, description, price, image URL, and creator tracking
  - **Purchase Model**: User-course relationships for transaction history
  
## Advanced Features:
  
### State Management
  - **Redux Persist**: Persistent user sessions across browser sessions
  - **Role-Based UI**: Dynamic interface rendering based on user role
  - **Authentication State**: Real-time login/logout state management
  - **Protected Routes**: Role-based access control for different sections
  
### User Experience
  - **Responsive Design**: Mobile-friendly interface with Tailwind CSS
  - **Navigation System**: Intuitive navigation with role-specific menu items
  - **Form Validation**: Client and server-side validation for data integrity
  - **Error Handling**: Comprehensive error handling and user feedback
  
### Security Features
  - **Middleware Protection**: Route-level authentication middleware
  - **Input Validation**: Zod schema validation for all API endpoints
  - **Password Security**: bcrypt hashing with salt rounds for password protection
  - **Token Management**: Secure JWT token handling with expiration
  
## Business Applications:
  - **Educational Institutions**: Universities and schools can sell online courses
  - **Individual Instructors**: Freelance educators can monetize their expertise
  - **Corporate Training**: Companies can distribute internal training materials
  - **Skill Development**: Professional development and certification courses
  
## Technology Integration:
  Seamless integration of modern web technologies to create a scalable e-learning marketplace that bridges content creators with learners through secure, user-friendly interfaces and robust backend services.`,
    tags: ["React", "Node.js", "MongoDB", "E-commerce", "Authentication", "Redux", "Fullstack"],
    features: [
      "Dual user authentication system (admin and student roles)",
      "Course creation and management for educators",
      "Secure payment processing and purchase tracking",
      "Responsive design with Tailwind CSS",
      "Redux state management with persistent sessions",
      "JWT-based authentication with bcrypt security",
      "MongoDB database with Mongoose ODM",
      "Role-based access control and protected routes"
    ],
    techStack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redux Toolkit",
      "JWT Authentication",
      "Tailwind CSS",
      "Axios"
    ],
    date: "December 15, 2024"
  },
  {
    id: 'movies-mania',
    category: 'side',
    title: 'MoviesMania - Movie & TV Show Discovery Platform',
    github: 'https://github.com/yashdangar/MovieMania',
    href: 'https://final-project-bay-rho.vercel.app/',
    repoCount: 1,
    description:
      'Comprehensive entertainment discovery platform featuring trending movies, TV shows, and celebrity information with real-time data, trailer integration, and advanced search capabilities.',
    longDescription: `A modern **entertainment discovery platform** built with React and Redux, featuring comprehensive movie and TV show information, real-time trending data, and seamless multimedia integration.
    
## Project Overview:
    Complete entertainment hub enabling users to discover, explore, and learn about movies, TV shows, and celebrities with rich multimedia content and real-time data from The Movie Database (TMDB) API.
    
## Core Entertainment Features:
    
### Multi-Content Discovery System
    - **Trending Content**: Real-time trending movies and TV shows with daily updates
    - **Popular Media**: Curated popular content across different categories
    - **Movie Database**: Comprehensive movie information with detailed metadata
    - **TV Show Library**: Extensive TV show database with episode information
    - **Celebrity Profiles**: Detailed actor and crew information with filmography
    
### Advanced Content Management
    - **Dynamic Filtering**: Category-based filtering (movies, TV shows, all content)
    - **Infinite Scroll**: Seamless content loading with infinite scroll functionality
    - **Real-time Updates**: Live data synchronization with TMDB API
    - **Responsive Design**: Optimized viewing experience across all devices
    
## Rich Media Integration:
    
### Multimedia Content System
    - **Trailer Integration**: YouTube trailer embedding with React Player
    - **High-Quality Images**: TMDB image API integration for posters and backdrops
    - **Video Playback**: Seamless trailer viewing with custom video controls
    - **Image Optimization**: Responsive image loading with fallback handling
    
### Content Presentation
    - **Hero Headers**: Dynamic hero sections with backdrop images and content overview
    - **Card Layouts**: Multiple card designs for different content types
    - **Detail Pages**: Comprehensive information pages with metadata
    - **Navigation System**: Intuitive sidebar navigation with category organization
    
## Technical Architecture:
    
### TMDB API Integration
    - **RESTful API**: Complete integration with The Movie Database API
    - **Authentication**: Bearer token authentication for secure API access
    - **Data Fetching**: Axios-based HTTP client with error handling
    - **Real-time Data**: Live content updates and trending information
    
### State Management
    - **Redux Toolkit**: Centralized state management with Redux Toolkit
    - **Slice Architecture**: Organized state slices for movies, TV shows, and people
    - **Async Actions**: Redux Thunk integration for API calls
    - **Performance Optimization**: Efficient state updates and re-rendering
    
### Routing & Navigation
    - **React Router**: Client-side routing with nested route support
    - **Dynamic Routes**: Parameter-based routing for content details
    - **Navigation Guards**: Proper route handling and error boundaries
    - **Deep Linking**: Direct access to specific content pages
    
## User Experience Features:
    
### Interactive Interface
    - **Responsive Design**: Mobile-first design with Tailwind CSS
    - **Loading States**: Smooth loading animations and skeleton screens
    - **Error Handling**: Graceful error handling with fallback components
    - **Accessibility**: Keyboard navigation and screen reader support
    
### Content Discovery
    - **Search & Filter**: Advanced filtering options for content discovery
    - **Recommendations**: Trending and popular content suggestions
    - **External Links**: Integration with IMDb, Wikipedia, and official websites
    - **Social Features**: Share functionality and external platform integration
    
## Advanced Features:
    - **Infinite Scroll**: Seamless content loading without pagination
    - **Video Integration**: YouTube trailer embedding with custom controls
    - **Image Optimization**: Responsive images with lazy loading
    - **Performance**: Optimized bundle size and fast loading times
    - **SEO Friendly**: Meta tags and proper document structure
    
## Business Applications:
    - **Entertainment Discovery**: Help users find new movies and TV shows
    - **Content Research**: Provide detailed information for entertainment research
    - **Media Planning**: Assist in content planning and scheduling
    - **Fan Engagement**: Connect fans with their favorite content and celebrities
    
## Technology Integration:
    Advanced integration of modern web technologies to create a seamless entertainment discovery platform that bridges content discovery with rich multimedia experiences.`,
    tags: ['React', 'Redux', 'TMDB API', 'Entertainment', 'Movies', 'TV Shows', 'Trailers'],
    features: [
      'Real-time trending movies and TV shows discovery',
      'Comprehensive movie and TV show database integration',
      'Celebrity profiles and filmography information',
      'YouTube trailer integration with custom video player',
      'Advanced filtering and search capabilities',
      'Infinite scroll for seamless content browsing',
      'Responsive design optimized for all devices',
      'Redux state management with real-time data synchronization',
    ],
    techStack: [
      'React 18',
      'Redux Toolkit',
      'TMDB API',
      'React Router',
      'Tailwind CSS',
      'Axios',
      'React Player',
      'Vite',
    ],
    date: 'December 20, 2024',
  },
];
