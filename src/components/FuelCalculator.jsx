import { useState, useEffect } from 'react';
import Input from '../ui/Input';

const FuelCalculator = () => {
    const [average, setAverage] = useState(70);
    const [fuelPrice, setFuelPrice] = useState(94.49);
    const [amount, setAmount] = useState(220);
    const [dailyDistance, setDailyDistance] = useState(32);

    const liters = (amount / fuelPrice).toFixed(2);
    const totalDistance = (liters * average).toFixed(2);
    const days = (liters / (dailyDistance / average)).toFixed(1);
    const dailyCost = ((dailyDistance / average) * fuelPrice).toFixed(2);

    return (
        <div className="manual-calculator">
            <h1>Manual Fuel Calculator</h1>
            <Input
                labelName="Your Vehicle Average (km/l):"
                type="number"
                value={average}
                onChange={(e) => setAverage(Number(e.target.value))}
                min="1"
            />
            <Input
                labelName="Current Fuel Price (₹/liter):"
                type="number"
                value={fuelPrice}
                onChange={(e) => setFuelPrice(Number(e.target.value))}
                min="1"
                step="0.01"
            />
            <Input
                labelName="Amount to Spend (₹):"
                type="number"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                min="1"
            />
            <Input
                labelName="Your Daily Distance (km):"
                type="number"
                value={dailyDistance}
                onChange={(e) => setDailyDistance(Number(e.target.value))}
                min="1"
            />

            <div className="results">
                <h3>Results</h3>
                <table>
                    <tbody>
                        <tr>
                            <td>Fuel quantity:</td>
                            <td><strong>{liters} liters</strong></td>
                        </tr>
                        <tr>
                            <td>Total distance:</td>
                            <td><strong>{totalDistance} km</strong></td>
                        </tr>
                        <tr>
                            <td>Duration:(for your daily commute)</td>
                            <td><strong>{days} days</strong> </td>
                        </tr>
                        <tr>
                            <td>Daily fuel cost:</td>
                            <td><strong>₹{dailyCost}</strong></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};
export default FuelCalculator