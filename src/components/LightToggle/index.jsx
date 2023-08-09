import React, { useState, useEffect } from 'react';

const LightToggle = () => {
  const [isLight, setIsLight] = useState(
    localStorage.getItem("isLight") === "true"
  );

  useEffect(() => {
    if (isLight) {
      document.documentElement.classList.add('light');
      localStorage.setItem("isLight", "true");
    } else {
      document.documentElement.classList.remove('light');
      localStorage.setItem("isLight", "false");
    } 
  }, [isLight]);

  return (
    <div>
      <label className="LightToggle">
        <b>Lumière: </b>
        <input
          id="LightToggleSwitch"
          type="checkbox"
          checked={isLight}
          onChange={event => setIsLight(event.target.checked)}
        />
      </label>
    </div>
  );
};

export default LightToggle;