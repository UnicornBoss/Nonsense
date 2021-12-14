import React from 'react'

export default function Doodle({ rule, size }) {
  return (
    <div className={`w-${size}px h-${size}px`}><css-doodle click-to-update>{rule}</css-doodle></div>
  )

}
