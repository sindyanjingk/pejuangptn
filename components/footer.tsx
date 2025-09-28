"use client";

import Link from "next/link";
import { Target } from "lucide-react";
import { MotionWrapper } from "@/components/animations/motion-wrapper";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <Target className="h-6 w-6 text-blue-400" />
              <span className="text-lg font-bold">Pejuang PTN</span>
            </div>
            <p className="text-gray-400">
              Platform tryout terlengkap untuk persiapan UTBK dan PTN impianmu.
            </p>
          </motion.div>
          
          {[
            {
              title: "Produk",
              links: [
                { name: "Tryout Gratis", href: "/tryouts" },
                { name: "Tryout Premium", href: "/pricing" },
                { name: "Analytics", href: "/tryouts" }
              ]
            },
            {
              title: "Perusahaan", 
              links: [
                { name: "Tentang Kami", href: "/about" },
                { name: "Kontak", href: "/contact" },
                { name: "Karir", href: "/careers" }
              ]
            },
            {
              title: "Bantuan",
              links: [
                { name: "FAQ", href: "/faq" },
                { name: "Dukungan", href: "/support" },
                { name: "Privasi", href: "/privacy" }
              ]
            }
          ].map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2 text-gray-400">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href} 
                      className="hover:text-white transition-colors hover:underline"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p>&copy; 2025 Pejuang PTN. Made with ❤️ for Indonesian students.</p>
        </motion.div>
      </div>
    </footer>
  );
}