// src\cumponents\Draksa\Settings.tsx

import { Details } from './Details';
import { ReadSpeed } from './ReadSpeed';
import { SlurpWhenFed } from './SlurpWhenFed';

export const Settings = () => {
  return (
    <Details
      className=""
      summary={
        <p className="flex items-center gap-2 text-xl">
          Settings
          <span className="text-2xl">⚙</span>
        </p>
      }
    >
      <div className="flex flex-col gap-6">
        <SlurpWhenFed />
        <ReadSpeed />
      </div>
    </Details>
  );
};
