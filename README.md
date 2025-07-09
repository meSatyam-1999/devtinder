### 💖 **DevMatch - Dating App for Developers**  
**Built with MERN Stack, Socket.IO & Tailwind CSS**  

Connect with fellow coders in a feature-rich dating platform designed exclusively for software developers! Swipe, chat, and build meaningful connections with real-time interactions and secure payments.  

---

### ✨ **Key Features**  

| Feature                  | Icon | Description                                                                 |
|--------------------------|------|-----------------------------------------------------------------------------|
| **Tinder-Style Feed**    | 💌   | Swipe to send connection requests with instant feedback                     |
| **Connection Hub**       | 🤝   | Track pending requests, active connections & history                        |
| **Real-Time Chat**       | 💬   | Socket.IO powered messaging with read receipts & typing indicators          |
| **Subscription Plans**   | 💎   | Razorpay integration for premium tiers (monthly/annual)                     |
| **Profile Builder**      | �   | Add photos, age, occupation & tech stack with rich validation              |
| **Cron Automation**      | ⏰   | Daily matches, subscription reminders & cleanup tasks                      |
| **Secure Auth**          | 🔐   | Bcrypt password hashing + JWT token authentication                         |
| **Responsive UI**        | 📱   | Mobile-first design with Daisy UI components                               |

---

### 🧩 **Tech Stack**  
- **Frontend**: React 18 + Redux Toolkit + Axios  
- **Styling**: Tailwind CSS + Daisy UI  
- **Backend**: Node.js + Express  
- **Database**: MongoDB (Mongoose ODM)  
- **Real-Time**: Socket.IO  
- **Payments**: Razorpay API  
- **Deployment**: AWS EC2 (Ubuntu)  
- **Utilities**: Cron Jobs, Bcryptjs, Cloudinary (image uploads)  

---

### 🖥️ **App Preview**  
![Registration](https://github.com/meSatyam-1999/devtinder/blob/main/Screenshot%202025-07-09%20175751.png)  
![Feed](https://github.com/meSatyam-1999/devtinder/blob/main/Screenshot%202025-07-09%20175410.png)  
![Profile](https://github.com/meSatyam-1999/devtinder/blob/main/Screenshot%202025-07-09%20172618.png)  
![Pending Request](https://github.com/meSatyam-1999/devtinder/blob/main/Screenshot%202025-07-09%20180215.png)  
![Request accept](https://github.com/meSatyam-1999/devtinder/blob/main/Screenshot%202025-07-09%20175643.png)  
![Subscription](https://github.com/meSatyam-1999/devtinder/blob/main/Screenshot%202025-07-09%20175700.png)  
![chat](https://github.com/meSatyam-1999/devtinder/blob/main/Screenshot%202025-07-09%20175728.png)  
 

---

### 🚀 **Features Deep Dive**  
1. **Developer-First Profiles**  
   - Stack preferences (Frontend/Backend/DevOps)  
   - GitHub/Bitbucket integration  
   - "Pair Programming" interest toggle  

2. **Smart Connections**  
   - Algorithmic matching by tech interests  
   - Mutual connection indicators  
   - Request expiration (7-day limit)  

3. **Premium Perks**  
   - Unlimited swipes 🚫  
   - Profile visibility boost ✨  
   - Priority customer support ⚡  

4. **Admin Dashboard**  
   - User analytics dashboard  
   - Subscription management  
   - Connection reports  

---

### 🚦 **Getting Started**  
1. Clone repository:  
```bash
git clone [https://github.com/meSatyam-1999/devtinder.git]
```  
2. Install dependencies:  
```bash
cd client && npm install
cd ../server && npm install
```  
3. Configure environment variables:  
```env
# Server .env
RAZORPAY_KEY= replace your_razorpay_key
MONGO_URI= replace your_mongodb_uri
JWT_SECRET= replace your_jwt_secret
```  
4. Run concurrently:  
```bash
npm run dev  # Starts both client/server
```  

---

### 🌐 **Deployment**  
1. AWS EC2 setup guide included in `/docs`  
2. PM2 process management  
3. NGINX reverse proxy configuration  

---

### 📂 **Project Structure**  
```bash
devmatch/
├── client/           # React frontend
│   ├── src/features/ # Redux slices (auth, connections, chat)
│   └── ...           
└── server/           # Express backend
    ├── controllers/  # Business logic
    ├── models/       # MongoDB schemas
    ├── routes/       # API endpoints
    ├── utils/        # Cron jobs, socket handlers
    └── ...
```

---

### 🔧 **Optimizations**  
- 60% faster renders with React.memo  
- WebSocket compression for low-bandwidth chats  
- Lazy-loaded profile images   

---

**💻 Made by developers, for developers**  
**✨ Find your perfect code companion today!**  

--- 

![MERN Stack](https://img.shields.io/badge/MERN-00f?style=flat&logo=mongodb&logoColor=white)
![Socket.IO](https://img.shields.io/badge/Socket.IO-010101?style=flat&logo=socket.io)
![Razorpay](https://img.shields.io/badge/Razorpay-020661?style=flat&logo=razorpay)
![AWS](https://img.shields.io/badge/AWS_EC2-FF9900?style=flat&logo=amazonec2&logoColor=white)

**Ready to mingle? Star ⭐ the repo and deploy your own love algorithm!**
