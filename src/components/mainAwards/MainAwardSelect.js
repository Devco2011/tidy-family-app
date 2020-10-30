import React, { useState, useContext } from 'react';
import { MainAwardContext } from "./MainAwardsProvider";

export const MainAwardSelect = (props) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const { mainAwards, getMainAwards } = useContext(MainAwardContext)

    const toggle = () => setDropdownOpen(prevState => !prevState);

    {
        mainAwards.map(mainAward => {
            if (mainAward.familyId === parseInt(localStorage.getItem("family_id")))

                return <form className="animalForm">
                    <h2 className="animalForm__title">
                        Main Awards
                    </h2>

                    <fieldset>
                        <div className="form-group">
                            <label htmlFor="location">Assign to location: </label>
                            <select value="mainAwards" name="mainAwardId" id="mainAward" className="form-control" //onChange={handleControlledInputChange}
                            >
                                <option value="0">Select a location</option>
                                {mainAwards.map(mainAward => {
                                    if (mainAward.familyId === parseInt(localStorage.getItem("family_id")))
                                        return <option key={mainAward.id} value={mainAward.id}>
                                            {mainAward.name}
                                        </option>
                                })}

                            </select>
                        </div>
                    </fieldset>

                </form>


        }

        )
    }
}