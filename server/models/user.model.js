 import { Schema, model } from "mongoose";

 const userSchema = new Schema({
    fullName: {
        type: 'Strong',
        required: [true , 'Name is required'],
        minLength: [5,'Name must be at least 5 charchter'],
        maxLength: [50, 'Name should be less than 50 chachters'],
        lowercase: true,
        trim: true,
    },
    email: {
        type: 'String',
        required: [true, 'Email is required'],
        lowercase: true,
        trim: true,
        unique: true,
        match: [/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,'please fill in a valid email address']
    },
    password: {
        type: 'String',
        required: [true,'password is required'],
        minLength: [8,'password must be at least 8 characters'],
        select: false
        
    },

    avatar: {
        public_Id:{
            type: 'String',

        },
        secure_url:{
            type: 'String'
        }
    },
    role: {
        type: 'String',
        enum: ['USER','ADMIN'],
        default: 'USER'

    },
    forgetPasswordToken: String,
    forgetPasswordExpiry: Date



 },{
    timeseries: true
 });

 const User = model('User', userSchema);

 export default User;