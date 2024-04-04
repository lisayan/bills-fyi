// Define your tab data
export const providerTabs =
[
    {
        label: "Dr Wang",
        content: "{'Insurance paid': 234, 'You paid': 123}"
    },
    {
        label: "Dr. Yan",
        content: "{'Insurance paid': 789, 'You paid': 789}"
    },
    {
        label: "Dr. Zang",
        content: "{'Insurance paid': 456, 'You paid': 456}"
    }
];

export const insuranceTabs = [
    {
    label: "Aetna",
    content: "Providers",
    subTabs: providerTabs
    },
    {
    label: "BlueCross",
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