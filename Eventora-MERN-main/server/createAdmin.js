const dns = require('dns');
dns.setServers(['1.1.1.1', '8.8.8.8']);
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');
const User = require('./models/User');

dotenv.config();

const createAdmin = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);

        const email = 'admin@eventora.com';
        const password = 'password123';

        const hashedPassword = await bcrypt.hash(password, 10);

        const admin = await User.findOneAndUpdate(
            { email },
            {
                $set: {
                    name: 'Admin User',
                    password: hashedPassword,
                    role: 'admin',
                    isVerified: true
                }
            },
            { new: true, upsert: true, runValidators: true }
        );

        console.log('Admin account ready!');
        console.log('Email:', admin.email);
        console.log('Role:', admin.role);
        console.log('Verified:', admin.isVerified);

    } catch (error) {
        console.error('Admin creation error:', error.message);
    } finally {
        await mongoose.disconnect();
    }
};

createAdmin();
