try {
    if (true) {
        let x = 10;
        var y = 20;
    }

    console.log("Output of y:", y);
    console.log("Output of x:", x);
} catch (error) {
    console.log("Error for x:", error.message);
}

const profile = {
    user: {
        details: {
            email: "test@mail.com"
        }
    }
};

console.log("Email:", profile?.user?.details?.email);
console.log("Phone:", profile?.user?.details?.phone);

const student = {
    name: "Arjun",
    address: {
        city: "Hyderabad"
    }
};

console.log(
    "Safe access to missing nested property:",
    student?.address?.pincode?.code
);
