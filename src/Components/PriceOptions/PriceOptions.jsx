import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
    
       const priceOptions = [
          {
            "id": 1,
            "name": "Basic Monthly Membership",
            "price": 30.00,
            "features": [
              "Unlimited access to gym equipment",
              "Access to cardio and strength training areas",
              "Locker rental included",
              "Access to group fitness classes",
              "Discounts on personal training sessions",
              "Nutritional consultation"
            ]
          },
          {
            "id": 2,
            "name": "Premium Monthly Membership",
            "price": 60.00,
            "features": [
              "All benefits of the Basic Monthly Membership",
              "Access to premium fitness equipment",
              "Complimentary towel service",
              "Exclusive access to sauna and steam room",
              "Priority booking for group fitness classes",
              "Free access to fitness tracking app"
            ]
          },
          {
            "id": 3,
            "name": "Annual Membership",
            "price": 330.00,
            "features": [
              "All benefits of the Premium Monthly Membership",
              "Savings equivalent to two months of Basic Membership",
              "One free personal training session per quarter",
              "Access to member-only events and workshops",
              "Flexible payment options",
              "Annual fitness assessment"
            ]
          },
          {
            "id": 4,
            "name": "Student Discount",
            "price": 20.00,
            "features": [
              "Valid student ID required",
              "Access during non-peak hours",
              "Basic Monthly Membership features",
              "Discounts on additional personal training sessions",
              "No initiation fee",
              "Student fitness challenges and rewards"
            ]
          },
          {
            "id": 5,
            "name": "Family Membership",
            "price": 70.00,
            "features": [
              "Includes two adults and up to two children",
              "Access to all gym areas for all family members",
              "Discounts on additional family members",
              "Locker rental for all family members",
              "Monthly family fitness class included",
              "Family nutrition workshop"
            ]
          }
        ]
      
      
    return (
        <div className="max-w-screen-xl mx-auto">
            <h2 className="text-5xl">Best prices in the town</h2>
            <div className="grid  grid-cols-3 gap-4">
                {
                    priceOptions.map(option => <PriceOption key={option.id} 
                        option={option}><h2>{option.name}</h2></PriceOption>)
                }
            </div>
                
        </div>
    );
};

export default PriceOptions;