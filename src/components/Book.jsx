import React, { useState } from 'react'
import { motion } from 'framer-motion'
import book from '../assets/images/book.png'
import blueicon from '../assets/icons/blue.png'
import grayicon from '../assets/icons/gray.png'
import orangeicon from '../assets/icons/orange.png'
import roseicon from '../assets/icons/rose.png'
import yellowicon from '../assets/icons/yellow.png'
import greenicon from '../assets/icons/green.png'

const Chip = ({ icon, label, delay, amplitude = 8, rotate = 0, direction = 'left' }) => {
  const xFrom = direction === 'left' ? -amplitude : amplitude
  const xTo = direction === 'left' ? amplitude : -amplitude

  return (
    <motion.div
      animate={{
        x: [0, xTo, 0],
      }}
      transition={{
        duration: 3.5,
        repeat: Infinity,
        ease: 'easeInOut',
        delay,
      }}
      style={{ rotate }}
      className="p-2 bg-white/40 rounded-4xl"
    >
      <motion.div
        className="flex text-xl items-center gap-2 bg-white rounded-full pl-[1.5px] pr-4 py-[1.5px] shadow-md border border-gray-100 whitespace-nowrap select-none"
        style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.10)' }}
      >
        <img src={icon} alt="" className="w-9 h-9 object-contain" />
        <span className="font-medium text-gray-800">{label}</span>
      </motion.div>
    </motion.div>
  )
}

export default function Book() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const isReady = name.trim() !== '' && email.trim() !== ''

  const handleDownload = () => {
    if (isReady) {
      alert('Downloading Chapter 1 — FREE!')
    }
  }

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center pt-6 pb-12 px-4"
      style={{ background: '#D9D9D9', fontFamily: "'Poppins', sans-serif" }}
    >
      <div className="w-full max-w-7xl flex flex-col items-center gap-8">

        {/* Heading */}
        <div className="text-center px-2 font-medium">
          <h1 className="text-3xl md:text-5xl leading-tight text-gray-900 font-semibold tracking-tight">
            Get my book along with the video course
            <br className="hidden sm:block" /> delivered to your doorstep.
          </h1>
          <p className="mt-3 text-gray-500 text-base sm:text-lg font-normal">
            Your complete guide to scaling your education business.
          </p>
        </div>

         {/* Mobile chips row */}
        <div className="flex md:hidden flex-wrap gap-2 justify-center px-2">
          {[
          
            { icon: blueicon,   label: 'Higher Conversion', delay: 0.6 },
            { icon: greenicon,  label: 'Art of Relevance',  delay: 0.9 },
            { icon: roseicon,   label: 'Positioning',       delay: 1.2 },
    
          ].map(({ icon, label, delay }) => (
            <Chip key={label} icon={icon} label={label} delay={delay} amplitude={5} />
          ))}
        </div>

        {/* Book + Chips */}
        <div className="relative w-full flex items-center justify-center" style={{ minHeight: 420 }}>

          {/* Left chips */}
          <div className="hidden md:flex flex-col gap-5 absolute left-0 top-1/2 -translate-y-1/2 z-10 items-end">
            <Chip icon={orangeicon} label="More Enrollments" delay={0}   amplitude={7} rotate={-4}  direction="left" />
            <Chip icon={grayicon}   label="Sell Faster"       delay={0.6} amplitude={9} rotate={3}   direction="left" />
            <Chip icon={blueicon}   label="Higher Conversion" delay={1.2} amplitude={7} rotate={-3}  direction="left" />
          </div>

          <div className="p-4 bg-gradient-to-b from-white/50 to-gray-700/10 rounded-[50px]">
            <div className="p-5 bg-white shadow-2xl" style={{ borderRadius: 50 }}>
              <img src={book} alt="Only Choice Book" className="w-xl h-full object-contain" />
            </div>
          </div>

          {/* Right chips */}
          <div className="hidden md:flex flex-col gap-5 absolute right-0 top-1/2 -translate-y-1/2 z-10 items-start">
            <Chip icon={greenicon}  label="Art of Relevance"   delay={0.3} amplitude={8} rotate={4}  direction="right" />
            <Chip icon={roseicon}   label="Positioning"        delay={0.9} amplitude={6} rotate={-3} direction="right" />
            <Chip icon={yellowicon} label="Student Psychology" delay={1.5} amplitude={9} rotate={3}  direction="right" />
          </div>
        </div>

        {/* Mobile chips row */}
        <div className="flex md:hidden flex-wrap gap-2 justify-center px-2">
          {[
            
            { icon: grayicon,   label: 'Sell Faster',       delay: 0.3 },
         { icon: orangeicon, label: 'More Enrollments',  delay: 0 },
            { icon: yellowicon, label: 'Student Psychology',delay: 1.5 },
   
          ].map(({ icon, label, delay }) => (
            <Chip key={label} icon={icon} label={label} delay={delay} amplitude={5} />
          ))}
        </div>

        {/* Form card */}
        <div className='bg-white/40 px-5 py-5.5 w-full rounded-[40px] mt-5' style={{boxShadow: '0 4px 24px rgba(0,0,0,0.09), inset 0 0 0 1px rgba(255,255,255,0.8)',}}>
            <div
          className="w-full rounded-[30px] p-6 sm:p-8"
          style={{
            background: 'linear-gradient(160deg, #f9f9f9, #ebebeb)',
           boxShadow: '0 10px 35px rgba(0,0,0,0.2), inset 0 0 0 1px rgba(255,255,255,0.75)'
          }}
        >
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 flex flex-col gap-1">
              <label className="font-medium text-gray-700">Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-xl px-4 py-3 text-gray-700 outline-none border border-gray-200 bg-white placeholder-gray-400 focus:border-gray-400 transition-colors"
                style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}
              />
            </div>
            <div className="flex-1 flex flex-col gap-1">
              <label className="font-medium text-gray-700">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-xl px-4 py-3 text-gray-700 outline-none border border-gray-200 bg-white placeholder-gray-400 focus:border-gray-400 transition-colors"
                style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}
              />
            </div>
          </div>
        </div>
        </div>

        {/* Note */}
        <p className=" text-gray-500 -mt-4">
          Note: Fill the Form to Get Your Free Chapter
        </p>

        {/* Download button */}
        <div
          style={{
            background: 'linear-gradient(135deg, #fff, #d9d3d3)',
            borderRadius: 999,
            padding: 8,
            boxShadow: '0 2px 20px rgba(0,0,0,.1), inset 0 0 0 1px rgba(255,255,255,.6)',
          }}
          className="transition-transform duration-300 hover:scale-105"
        >
          <button
            onClick={handleDownload}
            disabled={!isReady}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 500,
              fontSize: 17,
              color: isReady ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.4)',
              background: isReady
                ? 'linear-gradient(180deg, #2c2c2c, #111)'
                : 'linear-gradient(180deg, #555, #333)',
              border: 'none',
              borderRadius: 999,
              padding: '13px 32px',
              cursor: isReady ? 'pointer' : 'not-allowed',
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              whiteSpace: 'nowrap',
              boxShadow: 'inset 0 -16px 48px #000, 0 24px 75px rgba(0,0,0,.18)',
              outline: 'none',
              transition: 'all 0.2s',
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Download Chapter 1 - FREE
          </button>
        </div>

      </div>
    </div>
  )
}