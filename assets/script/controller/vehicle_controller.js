import {getKey} from "../db/db.js";

export class VehicleController{

    constructor() {
        $("#btnSaveVehicle").click(e => {
            e.preventDefault();
            this.saveData();
        })

        $('#vehicleSearch').keydown(e => {
            if (e.keyCode == 13) {
                e.preventDefault();
                let vehicleType = $('#vehicleSearch').val();
                console.log(vehicleType)
                this.searchVehicle(vehicleType)
            }

        });

    }

    searchVehicle(vehicle){
        console.log(vehicle)

        var settings = {
            "url": "http://localhost:8083/api/v1/vehicle/"+vehicle,
            "method": "GET",
            "timeout": 0,
            "headers": {
                "Authorization": "Bearer " + getKey()
            },
        };

        $.ajax(settings).done(function (vehicleDTO) {
            console.log(vehicleDTO);
            // Assuming 'vehicleDTO' is the response from your Spring Boot API

            // Set vehicle information
          /*  $("#vehicle_id").val(vehicleDTO.id);
            $("#vehicle_name").val(vehicleDTO.name);
            $("#vehicle_type").val(vehicleDTO.vehicleType);
            $("#vehicle_price_for_1km").val(vehicleDTO.priceFor1Km);
            $("#vehicle_price_for_100km").val(vehicleDTO.priceFor100Km);
            $("#vehicle_seat_capacity").val(vehicleDTO.seatCapacity);
            $("#vehicle_fuel_usage").val(vehicleDTO.fuelUsage);
            $("#vehicle_category").val(vehicleDTO.category);

            // Set radio buttons and checkboxes
            if (vehicleDTO.fuelType === "DIESEL") {
                $("#vehicle_fuel_type").prop("checked", false);
            } else {
                $("#vehicle_fuel_type").prop("checked", true);
            }

            if (vehicleDTO.hybrid) {
                $("#vehicle_is_hybrid").prop("checked", true);
            }else {
                $("#vehicle_is_hybrid").prop("checked", false);
            }

            if (vehicleDTO.transmission === "AUTO") {
                $("#vehicle_is_transmission_manual").prop("checked", true);
            } else {
                $("#vehicle_is_transmission_manual").prop("checked", false);
            }

            // Assuming these fields are for the driver information
            $("#driver_name").val(vehicleDTO.driverDTO.name);
            $("#driver_contact").val(vehicleDTO.driverDTO.contact);
            $("#driver_nic").val(vehicleDTO.driverDTO.nic);
            $("#driver_id").val(vehicleDTO.driverDTO.id);

            // Assuming these fields are for driver license images
            // Assuming 'licenseImageFront' and 'licenseImageRear' are byte arrays in vehicleDTO
            // You'll need to handle these separately, possibly using FileReader to display images
            // Assuming 'vehicleDTO' is the response from your Spring Boot API

            // Display vehicle images
            $('#vehicle_front_view_img').attr('src', `data:image/jpg;base64,${vehicleDTO.images[0]}`);
            $('#vehicle_rear_view_img').attr('src', `data:image/jpg;base64,${vehicleDTO.images[1]}`);
            $('#vehicle_side_view_img').attr('src', `data:image/jpg;base64,${vehicleDTO.images[2]}`);
            $('#vehicle_front_interior_img').attr('src', `data:image/jpg;base64,${vehicleDTO.images[3]}`);
            $('#vehicle_rear_interior_img').attr('src', `data:image/jpg;base64,${vehicleDTO.images[4]}`);

            // Display driver license images
            $('#driver_license_front_img').attr('src', `data:image/jpg;base64,${vehicleDTO.driverDTO.licenseImageFront}`);
            $('#driver_licence_rear_img').attr('src', `data:image/jpg;base64,${vehicleDTO.driverDTO.licenseImageRear}`);
*/

        });
    }
    saveData(){

        let vehicleName = $("#vehicleName").val();
        let fuelType = $("#fuelType").val();
        let isHybrid = $("#isHybrid").val()
        let priceFor1Km = $("#priceFor1Km").val();
        let priceFor100Km = $("#priceFor100Km").val();
        let fuelUsage = $("#fuelUsage").val();
        let noOfSeats = $("#noOfSeats").val();
        let vehicleType= $('#vehicleType').val();
        let category = $("#category").val();
        let transmission = $("#transmission").val();


        let frontview = $('#vehicle_front_view').prop('files')[0];
        let backview = $('#vehicle_rear_view').prop('files')[0];
        let front_interior = $("#vehicle_side_view").prop("files")[0];
        let back_interior = $("#vehicle_front_interior").prop("files")[0];




        let driverName = $("#driverName").val();
        let driverContactNO = $("#driverContactNO").val();
        let driverNicNo = $("#driverNicNo").val();
        let driverRemarks = $("#driverRemarks").val();


        let licenseImageFront = $("#licenseImageFront").prop("files")[0];
        let licenseImageRear = $("#licenseImageRear").prop("files")[0];

        console.log("Name : "+vehicleName);
        console.log("Type : "+fuelType);
        console.log("Fuel Type : "+isHybrid);

        console.log("Price For 1KM : "+priceFor1Km);
        console.log("Price For 100KM : "+priceFor100Km);
        console.log("Fuel Usage : "+fuelUsage);
        console.log("Seat Capacity : "+noOfSeats);
        console.log("vehicleType : "+vehicleType);
        console.log("Category : "+category);
        console.log("Transmission : "+transmission);
        console.log("frontView : +"+frontview);
        console.log("blackView : "+backview);
        console.log("front_interior : "+front_interior);
        console.log("back_interior : "+back_interior);


        console.log("driverName : "+driverName);
        console.log("driverContact : "+driverContactNO);
        console.log("driverNic : "+driverNicNo);
        console.log("driverRemarks : "+driverRemarks);
        console.log("licenseImageFront : "+licenseImageFront);
        console.log("licenseImageRear : "+licenseImageRear);





       var form = new FormData();
        form.append("vehicleName", vehicleName);
        form.append("fuelType", fuelType);
        form.append("isHybrid", isHybrid);
        form.append("files", frontview);
        form.append("files", backview);
        form.append("files", front_interior);
        form.append("files", back_interior);
        form.append("priceFor1Km", priceFor1Km);
        form.append("priceFor100Km", priceFor100Km);
        form.append("fuelUsage", fuelUsage);
        form.append("noOfSeats", noOfSeats);
        form.append("vehicleType", vehicleType);
        form.append("category", category);
        form.append("transmission", transmission);
        form.append("driverName", driverName);
        form.append("driverNicNo", driverNicNo);
        form.append("driverContactNO", driverContactNO);
        form.append("licenceImageFront", licenseImageFront, "0 K7AX-9LifDGEKEoZ.jpg");
        form.append("licenceImageRear", licenseImageRear, "Importance-of-Driving-License.jpg");
        form.append("driverRemarks", "No");

       var settings = {
            "url": "http://localhost:8083/api/v1/vehicle",
            "method": "POST",
            "timeout": 0,
            "headers": {
                "Authorization": "Bearer " + getKey()
            },
            "processData": false,
            "mimeType": "multipart/form-data",
            "contentType": false,
            "data": form
        };

        $.ajax(settings).done(function (response) {
            console.log(response);
        });
    }





}
new VehicleController();