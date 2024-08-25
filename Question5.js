function getDeliveryTime(packageType) {
    let deliveryTime;

    switch (packageType.toLowerCase()) {
        case "standard":
            deliveryTime = "3-5 days";
            break;
        case "express":
            deliveryTime = "1-2 days";
            break;
        case "overnight":
            deliveryTime = "Next day";
            break;
        default:
            deliveryTime = "Unknown package type";
            break;
    }

    console.log(`Estimated delivery time for ${packageType} package: ${deliveryTime}`);
}

getDeliveryTime("standard");
getDeliveryTime("express");
getDeliveryTime("overnight");
getDeliveryTime("same-day");
