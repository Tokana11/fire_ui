import React from 'react';
import { useState } from 'react';
import {
    Outlet
} from 'react-router-dom';
import SearchBar from '../components/SearchBar';

export default function TrucksPage() {

    const [ cards, setCards ] = useState([
        {
            id: "1",
            structure: "01РСПБЗН",
            regNumber: "РВ6923РМ",
            brand: "RENAULT",
            model: "MIDLUM 270.15 dxi",
            mileage: "32879",
            vinNumber: "VIN123456",
            engineHoursMeter: "332.6",
            insuranceNumber: "789456123",
            tehchInspectionDate: new Date("2021-09-01").toLocaleDateString('bg')
        },
        {
            id: "2",
            structure: "01РСПБЗН",
            regNumber: "РВ1836РР",
            brand: "IVECO",
            model: "DAYLY 65С15",
            mileage: "28745",
            vinNumber: "VIN1234567",
            engineHoursMeter: "206.3",
            insuranceNumber: "98745612",
            tehchInspectionDate: new Date("2021-03-22").toLocaleDateString('bg')
        },
        {
            id: "3",
            structure: "01РСПБЗН",
            regNumber: "РВ1837РР",
            brand: "IVECO",
            model: "EUROCARGO",
            mileage: "27999",
            vinNumber: "VIN123456879",
            engineHoursMeter: "258.3",
            insuranceNumber: "324567798",
            tehchInspectionDate: new Date("2021-07-30").toLocaleDateString('bg')
        },
        {
            id: "4",
            structure: "01РСПБЗН",
            regNumber: "РВ9480МВ",
            brand: "IVECO",
            model: "MAGIRUS DEUTZ",
            mileage: "111258",
            vinNumber: "VIN12345699",
            engineHoursMeter: "381.3",
            insuranceNumber: "789654123",
            tehchInspectionDate: new Date("2022-01-01").toLocaleDateString('bg')
        },
        {
            id: "5",
            structure: "01РСПБЗН",
            regNumber: "РВ3628АВ",
            brand: "SCANIA",
            model: "P360",
            mileage: "25900",
            vinNumber: "VIN123456465",
            engineHoursMeter: "331.3",
            insuranceNumber: "9521753456",
            tehchInspectionDate: new Date("2021-08-15").toLocaleDateString('bg')
        },
        {
            id: "6",
            structure: "УПБЗН-СЪЕДИНЕНИЕ",
            regNumber: "РВ7608СВ",
            brand: "IVECO",
            model: "DAYLY 65C17В",
            mileage: "45897",
            vinNumber: "VIN12345646511",
            engineHoursMeter: "405.3",
            insuranceNumber: "8856413216",
            tehchInspectionDate: new Date("2021-02-19").toLocaleDateString('bg')
        },
        {
            id: "7",
            structure: "01РСПБЗН",
            regNumber: "РВ4875МН",
            brand: "ЗИЛ",
            model: "130",
            mileage: "87598",
            vinNumber: "VIN12345646515",
            engineHoursMeter: "511.6",
            insuranceNumber: "66555887746",
            tehchInspectionDate: new Date("2021-02-18").toLocaleDateString('bg')
        },
        {
            id: "8",
            structure: "01РСПБЗН",
            regNumber: "РВ5741ТР",
            brand: "ЩАЕР",
            model: "680",
            mileage: "79568",
            vinNumber: "VIN12345646758",
            engineHoursMeter: "0",
            insuranceNumber: "66555887331",
            tehchInspectionDate: new Date("2021-02-17").toLocaleDateString('bg')
        }
    ]);

    const [ fuelings, setFuelings ] = useState([
        {
            id: '1',
            regNumber: 'РВ6923РМ',
            structure: "01РСПБЗН",
            date: new Date("2021-09-01").toLocaleDateString('bg'),
            quantity: 50,
            price: 23.00
        },
        {
            id: '2',
            regNumber: 'РВ1837РР',
            structure: "01РСПБЗН",
            date: new Date('2021-12-15').toLocaleDateString('bg'),
            quantity: 30,
            price: 13.99
        },
        {
            id: '3',
            regNumber: 'РВ1836РР',
            structure: "01РСПБЗН",
            date: new Date('2021-12-02').toLocaleDateString('bg'),
            quantity: 20,
            price: 157.33
        },
        {
            id: '4',
            regNumber: 'РВ5741ТР',
            structure: "УПБЗН-СЪЕДИНЕНИЕ",
            date: new Date('2021-11-01').toLocaleDateString('bg'),
            quantity: 100,
            price: 45.00
        },
        {
            id: '5',
            regNumber: 'РВ0007ТР',
            structure: "УПБЗН-СЪЕДИНЕНИЕ",
            date: new Date('2021-12-18').toLocaleDateString('bg'),
            quantity: 48,
            price: 58.78
        },
        {
            id: '6',
            regNumber: 'РВ0007ТР',
            structure: "УПБЗН-СЪЕДИНЕНИЕ",
            date: new Date('2021-04-20').toLocaleDateString('bg'),
            quantity: 39,
            price: 215.45
        },
        {
            id: '7',
            regNumber: 'РВ6923РМ',
            structure: "01 РСПБЗН",
            date: new Date('2021-03-13').toLocaleDateString('bg'),
            quantity: 40,
            price: 147.78
        },
        {
            id: '8',
            regNumber: 'РВ3628АВ',
            structure: "01 РСПБЗН",
            date: new Date('2020-03-11').toLocaleDateString('bg'),
            quantity: 80,
            price: 159.77
        },
    ])

    const [ services, setServices ] = useState([
        {
            id: '1',
            regNumber: 'РВ6923РМ',
            structure: "01 РСПБЗН",
            description: "Доливане на експл. т-ти. ",
            engineOil: "Repsol 10W40",
            engineOilVol: 3,
            hydolicOil: "NHL 75W80",
            hydolicOilVol: 3,
            differentialOil: "NFT 85W90",
            differentialOilVol: 4,
            transmissinOil: "TransM OIL",
            transmissinOilVol: 3.5,
            pumpOil: "NHL 80W90",
            pumpOilVol: 2.7,
            brakeFluid: "Some fluid",
            brakeFluidVol: 1.5,
            antifreeze: "G12 red",
            antifreezeVol: 35,
            tyres: "",
            mileage: 158656,
            engineHoursMeter: "332.6",
            date: '01.12.2021',
            filters: {
                airFilter: "Air filter",
                airFilterChanged: true,
                airFilterQuantity: 1,
                fuelFilter: "Fuel filter",
                fuelFilterChanged: true,
                fuelFilterQuantity: 2,
                oilFilter: "AMSOIL Oil Filter",
                oilFilterChanged: true,
                oilFilterQuantity: 2
            },
            message:"Сменен филтър дехидратор. Гресиране на каретата на кардана."
        },
        {
            id: '2',
            regNumber: 'РВ1837РР',
            structure: "01 РСПБЗН",
            description: "Смяна на двиг. масло",
            engineOil: "Castrol 5W30",
            engineOilVol: 35,
            hydolicOil: "",
            hydolicOilVol: 0,
            differentialOil: "",
            differentialOilVol: 0,
            transmissinOil: "TransM OIL",
            transmissinOilVol: 0,
            pumpOil: "NHL 80W90",
            pumpOilVol: 0,
            brakeFluid: "Some fluid",
            brakeFluidVol: 0,
            antifreeze: "G12 red",
            antifreezeVol: 0,
            tyres: "Laufen 195/55 R15 - предни / Laufen 200/55 R15 - задни",
            mileage: 158656,
            engineHoursMeter: "332.6",
            date: '15.12.2021',
            filters: {
                airFilter: "Air filter",
                airFilterChanged: false,
                airFilterQuantity: 0,
                fuelFilter: "Fuel filter",
                fuelFilterChanged: false,
                fuelFilterQuantity: 0,
                oilFilter: "AMSOIL Oil Filter",
                oilFilterChanged: true,
                oilFilterQuantity: 2
            },
            message:''
        },
        {
            id: '3',
            regNumber: 'РВ1836РР',
            structure: "01 РСПБЗН",
            description: "Смяна на двиг. масло",
            engineOil: "Castrol 5W30",
            engineOilVol: 5,
            hydolicOil: "NHL 75W80",
            hydolicOilVol: 3,
            differentialOil: "NFT 85W90",
            differentialOilVol: 4,
            transmissinOil: "TransM OIL",
            transmissinOilVol: 3.5,
            pumpOil: "NHL 80W90",
            pumpOilVol: 2.7,
            brakeFluid: "Some fluid",
            brakeFluidVol: 1.5,
            antifreeze: "G12 red",
            antifreezeVol: 35,
            tyres: "Laufen 19.5",
            mileage: 158656,
            engineHoursMeter: "332.6",
            date: '02.12.2021',
            filters: {
                airFilter: "Air filter",
                airFilterChanged: false,
                airFilterQuantity: 0,
                fuelFilter: "Fuel filter",
                fuelFilterChanged: true,
                fuelFilterQuantity: 2,
                oilFilter: "AMSOIL Oil Filter",
                oilFilterChanged: false,
                oilFilterQuantity: 0
            },
            message:'Смяна на О-пръстени охлдаителна система.'
        },
        {
            id: '4',
            regNumber: 'РВ5741ТР',
            structure: "УПБЗН-СЪЕДИНЕНИЕ",
            description: "Смяна на двиг. масло",
            engineOil: "Castrol 5W30",
            engineOilVol: 5,
            hydolicOil: "NHL 75W80",
            hydolicOilVol: 3,
            differentialOil: "NFT 85W90",
            differentialOilVol: 4,
            transmissinOil: "TransM OIL",
            transmissinOilVol: 3.5,
            pumpOil: "NHL 80W90",
            pumpOilVol: 2.7,
            brakeFluid: "Some fluid",
            brakeFluidVol: 1.5,
            antifreeze: "G12 red",
            antifreezeVol: 35,
            tyres: "Laufen 19.5",
            mileage: 158656,
            engineHoursMeter: "332.6",
            date: '01.11.2021',
            filters: {
                airFilter: "Air filter",
                airFilterChanged: false,
                airFilterQuantity: 0,
                fuelFilter: "Fuel filter",
                fuelFilterChanged: false,
                fuelFilterQuantity: 0,
                oilFilter: "AMSOIL Oil Filter",
                oilFilterChanged: false,
                oilFilterQuantity: 0
            },
            message:'Смяна на прени накладки и дискове.'
        },
        {
            id: '5',
            regNumber: 'РВ0007ТР',
            structure: "УПБЗН-СЪЕДИНЕНИЕ",
            description: "Смяна на двиг. масло",
            engineOil: "Castrol 5W30",
            engineOilVol: 5,
            hydolicOil: "NHL 75W80",
            hydolicOilVol: 3,
            differentialOil: "NFT 85W90",
            differentialOilVol: 4,
            transmissinOil: "TransM OIL",
            transmissinOilVol: 3.5,
            pumpOil: "NHL 80W90",
            pumpOilVol: 2.7,
            brakeFluid: "Some fluid",
            brakeFluidVol: 1.5,
            antifreeze: "G12 red",
            antifreezeVol: 35,
            tyres: "Laufen 19.5",
            mileage: 158656,
            engineHoursMeter: "222.6",
            date: '18.12.2021',
            filters: {
                airFilter: "Air filter",
                airFilterChanged: false,
                airFilterQuantity: 0,
                fuelFilter: "Fuel filter",
                fuelFilterChanged: false,
                fuelFilterQuantity: 0,
                oilFilter: "AMSOIL Oil Filter",
                oilFilterChanged: false,
                oilFilterQuantity: 0
            },
            message:''
        },
        {
            id: '6',
            regNumber: 'РВ0007ТР',
            structure: "УПБЗН-СЪЕДИНЕНИЕ",
            description: "Смяна на двиг. масло",
            engineOil: "Castrol 5W30",
            engineOilVol: 5,
            hydolicOil: "NHL 75W80",
            hydolicOilVol: 3,
            differentialOil: "NFT 85W90",
            differentialOilVol: 4,
            transmissinOil: "TransM OIL",
            transmissinOilVol: 3.5,
            pumpOil: "NHL 80W90",
            pumpOilVol: 2.7,
            brakeFluid: "Some fluid",
            brakeFluidVol: 1.5,
            antifreeze: "G12 red",
            antifreezeVol: 35,
            tyres: "Laufen 19.5",
            mileage: 158656,
            engineHoursMeter: "112.6",
            date: '20.04.2021',
            filters: {
                airFilter: "Air filter",
                airFilterChanged: true,
                airFilterQuantity: 2,
                fuelFilter: "Fuel filter",
                fuelFilterChanged: true,
                fuelFilterQuantity: 1,
                oilFilter: "AMSOIL Oil Filter",
                oilFilterChanged: true,
                oilFilterQuantity: 1
            },
            message:'Смяна на маркучи на спирачки.'
        },
        {
            id: '7',
            regNumber: 'РВ6923РМ',
            structure: "01 РСПБЗН",
            description: "Смяна на двиг. масло",
            engineOil: "Castrol 5W30",
            engineOilVol: 5,
            hydolicOil: "NHL 75W80",
            hydolicOilVol: 3,
            differentialOil: "NFT 85W90",
            differentialOilVol: 4,
            transmissinOil: "TransM OIL",
            transmissinOilVol: 3.5,
            pumpOil: "NHL 80W90",
            pumpOilVol: 2.7,
            brakeFluid: "Some fluid",
            brakeFluidVol: 1.5,
            antifreeze: "G12 red",
            antifreezeVol: 35,
            tyres: "Laufen 19.5",
            mileage: 158656,
            date: '13.03.2021',
            filters: {
                airFilter: "Air filter",
                airFilterChanged: true,
                airFilterQuantity: 2,
                fuelFilter: "Fuel filter",
                fuelFilterChanged: true,
                fuelFilterQuantity: 1,
                oilFilter: "AMSOIL Oil Filter",
                oilFilterChanged: true,
                oilFilterQuantity: 1
            },
            message:''
        },
        {
            id: '8',
            regNumber: 'РВ3628АВ',
            structure: "01 РСПБЗН",
            description: "Смяна на двиг. масло",
            engineOil: "Castrol 5W30",
            engineOilVol: 5,
            hydolicOil: "NHL 75W80",
            hydolicOilVol: 3,
            differentialOil: "NFT 85W90",
            differentialOilVol: 4,
            transmissinOil: "TransM OIL",
            transmissinOilVol: 3.5,
            pumpOil: "NHL 80W90",
            pumpOilVol: 2.7,
            brakeFluid: "Some fluid",
            brakeFluidVol: 1.5,
            antifreeze: "G12 red",
            antifreezeVol: 35,
            tyres: "Laufen 19.5",
            mileage: 158656,
            engineHoursMeter: "332.6",
            date: '11.03.2020',
            filters: {
                airFilter: "Air filter",
                airFilterChanged: true,
                airFilterQuantity: 2,
                fuelFilter: "Fuel filter",
                fuelFilterChanged: true,
                fuelFilterQuantity: 1,
                oilFilter: "AMSOIL Oil Filter",
                oilFilterChanged: true,
                oilFilterQuantity: 1
            },
            message:''
        },
    ])

    const [ repairs, setRepairs ] = useState([
        {
            id: '1',
            regNumber: 'РВ6923РМ',
            structure: "01РСПБЗН",
            date: new Date('2022-12-01').toLocaleDateString('bg'),
            description: 'some repair',
            price: 23.00
        },
        {
            id: '2',
            regNumber: 'РВ1837РР',
            structure: "01РСПБЗН",
            date: new Date('2022-12-15').toLocaleDateString('bg'),
            description: 'some repair',
            price: 13.99
        },
        {
            id: '3',
            regNumber: 'РВ1836РР',
            structure: "01РСПБЗН",
            date: new Date('2022-11-13').toLocaleDateString('bg'),
            description: 'some repair',
            price: 157.33
        },
        {
            id: '4',
            regNumber: 'РВ5741ТР',
            structure: "УПБЗН-СЪЕДИНЕНИЕ",
            date: new Date('2022-08-05').toLocaleDateString('bg'),
            description: 'some repair',
            price: 45.00
        },
        {
            id: '5',
            regNumber: 'РВ0007ТР',
            structure: "УПБЗН-СЪЕДИНЕНИЕ",
            date: new Date('2022-05-18').toLocaleDateString('bg'),
            description: 'some repair',
            price: 58.78
        },
        {
            id: '6',
            regNumber: 'РВ0007ТР',
            structure: "УПБЗН-СЪЕДИНЕНИЕ",
            date: new Date('2022-04-20').toLocaleDateString('bg'),
            description: 'some repair',
            price: 215.45
        },
        {
            id: '7',
            regNumber: 'РВ6923РМ',
            structure: "01 РСПБЗН",
            date: new Date('2022-09-15').toLocaleDateString('bg'),
            description: 'some repair',
            price: 147.78
        },
        {
            id: '8',
            regNumber: 'РВ3628АВ',
            structure: "01 РСПБЗН",
            date: new Date('2021-11-03').toLocaleDateString('bg'),
            description: 'some repair',
            price: 159.77
        },
    ])



    const [ query, setQuery ] = useState('');
    const [ criteria, setCriteria ] = useState('regNumber');

    function addTruck(truck) {
        console.log("Truck added!")
        setCards([ ...cards, truck ])
    }

    function editTruck(truck) {
        setCards(cards.map((card) => {
            if (card.id === truck.id) {
                card = truck;
                return card;
            } else {
                return card;
            }

        }))
    }

    function deleteTruck(id) {
        setCards(cards.filter((card) => card.id !== id));
    }

    function addFuelingRecord(fuelingRecord) {
        console.log("Fueling record added!")
        setFuelings([ ...fuelings, fuelingRecord ])
    }

    function editFuelingRecord(fuelingRecord) {
        setFuelings(fuelings.map((fueling) => {
            if (fueling.id === fuelingRecord.id) {
                fueling = fuelingRecord;
                return fueling;
            } else {
                return fueling;
            }

        }))
    }

    function deleteFueling(id) {
        setFuelings(fuelings.filter((fueling) => fueling.id !== id));
    }

    function addServiceRecord(service) {
        console.log(service);
        setServices([ ...services, service ])
    }

    function deleteService(id) {
        setServices(services.filter((service) => service.id !== id));
    }

    function addRepairRecord(repair) {
        console.log(repair);
        setRepairs([ ...repairs, repair ])
    }

    function editRepairRecord(repairRecord) {
        setRepairs(repairs.map((repair) => {
            if (repair.id === repairRecord.id) {
                repair = repairRecord;
                return repair;
            } else {
                return repair;
            }

        }))
    }

    function deleteRepair(id) {
        setRepairs(repairs.filter((repair) => repair.id !== id));
    }


    return (
        <div className="content">
            <SearchBar search={setQuery} setSearchCriteria={setCriteria} />
            <Outlet context={{
                cards: cards.filter((card) => card[ `${criteria}` ].toLowerCase().includes(query.toLowerCase())),
                addTruck,
                editTruck,
                deleteTruck,

                fuelings: fuelings.filter((fueling) => fueling[ `${criteria}` ].toLowerCase().includes(query.toLocaleLowerCase())),
                addFuelingRecord,
                editFuelingRecord,
                deleteFueling,

                services: services.filter((service) => service[ `${criteria}` ].toLowerCase().includes(query.toLocaleLowerCase())),
                addServiceRecord,
                deleteService,

                repairs: repairs.filter((repair) => repair[ `${criteria}` ].toLowerCase().includes(query.toLowerCase())),
                addRepairRecord,
                editRepairRecord,
                deleteRepair,
            }} />
        </div>
    )
}
