import React from 'react';
import 'tailwindcss/tailwind.css';
import Link from 'next/link';
import Layout from '@/app/layoutdiBarraza';

export default function Page() {
  return (
    <Layout>
        <div>
            
            <Link href="/sudoku">
                <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">Sudoku</li>
            </Link>
            <Link href="/tetris">
                <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">Tetris</li>
            </Link>
            
            
            
        </div>  
    </Layout>
    
  )
}
