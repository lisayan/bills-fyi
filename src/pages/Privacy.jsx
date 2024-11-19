import React from 'react';
import Header from "../components/Header";

export default function TermsOfService() {
    return (
        <div className="terms-of-service flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow container mx-auto px-4 py-8 pt-32" style={{ backgroundColor: 'white', paddingTop: '124px' }}>
                <div className="flex justify-center mb-6">
                    <h1 className="text-3xl font-bold">Privacy Policy</h1>
                </div>
                <section className="mb-8">
                    <p className="font-bold mb-4">DO NOT USE THE SITE FOR EMERGENCY MEDICAL NEEDS. IF YOU EXPERIENCE A MEDICAL EMERGENCY CALL 911.</p>
                    <p>content</p>
                </section>
                {/* Add more sections here for the rest of the terms */}
            </main>
        </div>
    )
};
