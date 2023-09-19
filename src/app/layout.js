//1. import area


import './globals.css'
// { namedImport } from 'library';
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Justdial - Local Search, Social, News, Videos, Shopping',
  description: `Justdial, India's local search engine, provides Best Deals, Shop Online, Ticket Booking for Flights, Hotels, Movies, Buses and Cabs. You can also Order Food, Book Restaurant Table, View Menu, Book Doctors’ Appointments. Justdial curates Social content, News, Videos &amp; more from Top Publishers on all Trending Topics.`,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
