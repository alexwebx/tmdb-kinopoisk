import './RangeSlider.css';
import {type ChangeEvent, useCallback, useState} from "react";

// Типы для пропсов компонента
interface RangeSliderProps {
    onChange?: (values: { min: number; max: number }) => void;
    onFinalChange?: (values: { min: number; max: number }) => void;
}

const RangeSlider = ({ onChange, onFinalChange}: RangeSliderProps) => {
    const [minValue, setMinValue] = useState<number>(0);
    const [maxValue, setMaxValue] = useState<number>(10);

    const handleMinChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        const value = Math.min(parseFloat(e.target.value), maxValue - 0.1);
        setMinValue(value);
        onChange?.({ min: value, max: maxValue });
    }, [maxValue, onChange]);

    const handleMaxChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        const value = Math.max(parseFloat(e.target.value), minValue + 0.1);
        setMaxValue(value);
        onChange?.({ min: minValue, max: value });
    }, [minValue, onChange]);

    const minPos = (minValue / 10) * 100;
    const maxPos = (maxValue / 10) * 100;

    return (
        <div className="range-slider">
            <div className={"rating"}>
                <div className={"rating__box"}>
                    <p className={"rating__word"}>Rating</p>
                    <p className={"rating__count"}>{minValue.toFixed(1)} - {maxValue.toFixed(1)}</p>
                </div>
            </div>

            <div className="slider-container">
                <div className="slider-track" />
                <div
                    className="slider-range"
                    style={{
                        left: `${minPos}%`,
                        width: `${maxPos - minPos}%`
                    }}
                />
                <input
                    type="range"
                    min="0"
                    max="10"
                    step="0.1"
                    value={minValue}
                    onChange={handleMinChange}
                    onMouseUp={() => onFinalChange?.({ min: minValue, max: maxValue })}
                    onTouchEnd={() => onFinalChange?.({ min: minValue, max: maxValue })}
                    className="slider-thumb slider-thumb-min"
                />

                <input
                    type="range"
                    min="0"
                    max="10"
                    step="0.1"
                    value={maxValue}
                    onChange={handleMaxChange}
                    onMouseUp={() => onFinalChange?.({ min: minValue, max: maxValue })}
                    onTouchEnd={() => onFinalChange?.({ min: minValue, max: maxValue })}
                    className="slider-thumb slider-thumb-max"
                />

            </div>
        </div>
    );
};

export default RangeSlider;