// Define your tab data
export const providerTabs =
[
    {
        label: "Dr. Serena Wang",
        content: ""
    },
    {
        label: "Dr. Lisa Yan",
        content: ""
    },
    {
        label: "Dr. Ethan Zang",
        content: ""
    }
];

export const insuranceTabs = [
    {
    label: "Aetna",
    content: "Providers",
    subTabs: providerTabs
    },
    {
    label: "Blue Cross Blue Shield",
    content: "Providers",
    subTabs: providerTabs
    }
];

export const procedureTabs = [
    {
    label: "MRI",
    content: "Insurance carriers",
    subTabs: insuranceTabs
    },
    {
    label: "X-Ray",
    content: "Insurance carriers",
    subTabs: insuranceTabs
    }
];

export const dataObject = [
    {
        procedure: "MRI",
        insurance: "Aetna",
        provider: "Dr Wang",
        city: "Boston",
        state: "MA",
        insurance_paid: 20,
        you_paid: 10
    },
    {
        procedure: "MRI",
        insurance: "BlueCross",
        provider: "Dr Wang",
        city: "Boston",
        state: "MA",
        insurance_paid: 40,
        you_paid: 20
    },
    {
        procedure: "MRI",
        insurance: "Aetna",
        provider: "Dr Wang",
        city: "Boston",
        state: "MA",
        insurance_paid: 40,
        you_paid: 30
    },
    {
        procedure: "X-Ray",
        insurance: "BlueCross",
        provider: "Dr Zang",
        city: "Boston",
        state: "MA",
        insurance_paid: 5,
        you_paid: 0
    },
    {
        procedure: "X-Ray",
        insurance: "Aetna",
        provider: "Dr Yan",
        city: "Boston",
        state: "MA",
        insurance_paid: 40,
        you_paid: 60
    }
];