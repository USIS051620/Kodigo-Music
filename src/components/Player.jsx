import React from 'react';
import './Player.css';
import { IoPlaySkipBack, IoPlay, IoPlaySkipForward, IoVolumeMedium } from 'react-icons/io5';

const Player = () => {
    return (
        <div className="player-container">
        <div className="player-controls">
            <IoPlaySkipBack className="control-icon" />
            <IoPlay className="control-icon play-icon" />
            <IoPlaySkipForward className="control-icon" />
        </div>
        <div className="player-volume">
            <IoVolumeMedium className="control-icon" />
            <input type="range" min="0" max="100" className="volume-slider" />
        </div>
        </div>
    );
};

export default Player;