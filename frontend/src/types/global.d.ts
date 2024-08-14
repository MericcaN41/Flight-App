interface Flight {
    lastUpdatedAt: string; // ISO 8601 date string
    actualLandingTime: string; // ISO 8601 date string
    actualOffBlockTime: string; // ISO 8601 date string
    aircraftRegistration: string;
    aircraftType: {
        iataMain: string;
        iataSub: string;
    };
    baggageClaim: {
        belts: string[];
    };
    checkinAllocations: {
        checkinAllocations: {
            endTime: string; // ISO 8601 date string
            rows: {
                rows: {
                    position: string;
                    desks: {
                        desks: {
                            checkinClass: {
                                code: string;
                                description: string;
                            };
                            position: number;
                        }[];
                    };
                }[];
            };
            startTime: string; // ISO 8601 date string
        }[];
        remarks: {
            remarks: string[];
        };
    };
    codeshares: {
        codeshares: string[];
    };
    estimatedLandingTime: string; // ISO 8601 date string
    expectedTimeBoarding: string; // ISO 8601 date string
    expectedTimeGateClosing: string; // ISO 8601 date string
    expectedTimeGateOpen: string; // ISO 8601 date string
    expectedTimeOnBelt: string; // ISO 8601 date string
    expectedSecurityFilter: string;
    flightDirection: string; // 'A' or 'D'
    flightName: string;
    flightNumber: number;
    gate: string;
    pier: string;
    id: string;
    isOperationalFlight: boolean;
    mainFlight: string;
    prefixIATA: string;
    prefixICAO: string;
    airlineCode: number;
    publicEstimatedOffBlockTime: string; // ISO 8601 date string
    publicFlightState: {
        flightStates: string[];
    };
    route: {
        destinations: string[];
        eu: string;
        visa: boolean;
    };
    scheduleDateTime: string; // ISO 8601 date string
    scheduleDate: string;
    scheduleTime: string;
    serviceType: string;
    terminal: number;
    transferPositions: {
        transferPositions: number[];
    };
    schemaVersion: string;
}