// Calculator script for maternity costs

const DATA = {
    surgeryTypes: {
        "C-section": 1500,
        "Vaginal": 800,
        "Hysterectomy": 2000,
    },
    roomGroups: {
        "Standard": 100,
        "Deluxe": 200,
    },
    services: {
        "Ultrasound": 300,
        "Blood Test": 150,
        "Consultation": 100,
    }
};

function calculateMaternityCost(surgeryType, roomType, additionalServices) {
    let totalCost = 0;

    // Adding surgery cost
    if (DATA.surgeryTypes[surgeryType]) {
        totalCost += DATA.surgeryTypes[surgeryType];
    } else {
        throw new Error("Invalid surgery type");
    }

    // Adding room cost
    if (DATA.roomGroups[roomType]) {
        totalCost += DATA.roomGroups[roomType];
    } else {
        throw new Error("Invalid room type");
    }

    // Adding additional services cost
    additionalServices.forEach(service => {
        if (DATA.services[service]) {
            totalCost += DATA.services[service];
        } else {
            throw new Error(`Invalid service: ${service}`);
        }
    });

    return totalCost;
}

// Example usage:
// const total = calculateMaternityCost("C-section", "Deluxe", ["Ultrasound", "Consultation"]);
// console.log(`Total Maternity Cost: $${total}`);
