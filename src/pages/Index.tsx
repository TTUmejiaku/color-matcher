
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ColorMatcher from '@/components/ColorMatcher';
import ColorPaletteViewer from '@/components/ColorPaletteViewer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Color Match Tool</h1>
          <p className="mt-1 text-sm text-gray-500">
            Find exact matches or alternatives for hex colors in your design system
          </p>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow rounded-lg p-6">
          <Tabs defaultValue="matcher" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="matcher">Color Matcher</TabsTrigger>
              <TabsTrigger value="palette">Design System Colors</TabsTrigger>
            </TabsList>
            
            <TabsContent value="matcher">
              <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">Color Matcher</h2>
                <p className="text-gray-600">
                  Enter a hex color to find exact matches within the design system or discover similar alternatives
                </p>
              </div>
              
              <ColorMatcher />
            </TabsContent>
            
            <TabsContent value="palette">
              <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">Design System Colors</h2>
                <p className="text-gray-600">
                  Browse all available colors in the design system
                </p>
              </div>
              
              <ColorPaletteViewer />
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-center text-gray-500">
            Color Match Tool - Design System Utility
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
