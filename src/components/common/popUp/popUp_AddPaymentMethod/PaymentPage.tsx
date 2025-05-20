import React, { useState } from 'react'
import { AddPaymentMethodPopup } from './AddPaymentMethodPopup'

export const PaymentPage: React.FC = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null)

  const handleNext = (method: string) => {
    setSelectedMethod(method)
    setIsPopupOpen(false)
    console.log('Chosen method:', method)
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Payment Settings</h1>
      <button
        style={{
          padding: '0.75rem 1.5rem',
          backgroundColor: '#f27c53',
          color: '#fff',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer'
        }}
        onClick={() => setIsPopupOpen(true)}
      >
        Add Payment Method
      </button>

      {selectedMethod && (
        <p style={{ marginTop: '1rem' }}>
          Selected method: <strong>{selectedMethod}</strong>
        </p>
      )}

      {isPopupOpen && (
        <div style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          background: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000
        }}>
          <AddPaymentMethodPopup
            onClose={() => setIsPopupOpen(false)}
            onNext={handleNext}
          />
        </div>
      )}
    </div>
  )
}
