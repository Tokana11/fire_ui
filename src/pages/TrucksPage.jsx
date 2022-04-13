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
            tehchInspectionDate: "19/02/2021"
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
            tehchInspectionDate: "22/03/2021"
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
            tehchInspectionDate: "30/07/2021"
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
            tehchInspectionDate: "01/01/2022"
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
            tehchInspectionDate: "15/08/2021"
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
            tehchInspectionDate: "19/02/2021"
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
            tehchInspectionDate: "18/02/2021"
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
            tehchInspectionDate: "17/02/2021"
        }
    ]);

    const [ fuelings, setFuelings ] = useState([
        {
            id: '1',
            regNumber: 'РВ6923РМ',
            structure: "01РСПБЗН",
            date: '01.12.2021',
            quantity: 50,
            price: 23.00
        },
        {
            id: '2',
            regNumber: 'РВ1837РР',
            structure: "01РСПБЗН",
            date: '15.12.2021',
            quantity: 30,
            price: 13.99
        },
        {
            id: '3',
            regNumber: 'РВ1836РР',
            structure: "01РСПБЗН",
            date: '02.12.2021',
            quantity: 20,
            price: 157.33
        },
        {
            id: '4',
            regNumber: 'РВ5741ТР',
            structure: "УПБЗН-СЪЕДИНЕНИЕ",
            date: '01.11.2021',
            quantity: 100,
            price: 45.00
        },
        {
            id: '5',
            regNumber: 'РВ0007ТР',
            structure: "УПБЗН-СЪЕДИНЕНИЕ",
            date: '18.12.2021',
            quantity: 48,
            price: 58.78
        },
        {
            id: '6',
            regNumber: 'РВ0007ТР',
            structure: "УПБЗН-СЪЕДИНЕНИЕ",
            date: '20.04.2021',
            quantity: 39,
            price: 215.45
        },
        {
            id: '7',
            regNumber: 'РВ6923РМ',
            structure: "01 РСПБЗН",
            date: '13.03.2021',
            quantity: 40,
            price: 147.78
        },
        {
            id: '8',
            regNumber: 'РВ3628АВ',
            structure: "01 РСПБЗН",
            date: '11.03.2020',
            quantity: 80,
            price: 159.77
        },
    ])

    const [ services, setServices ] = useState([
        {
            id: '1',
            regNumber: 'РВ6923РМ',
            structure: "01РСПБЗН",
            description: "Доливане на експлоатационни течности",
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
            tyres: "Laufen 19.5",
            mileage: 158656,
            date: '01.12.2021',
            filters: {
                oilFilter: "AMSOIL Oil Filter",
                oilFilterQuantity: 2,
                airFilter: "Air filter",
                airFilterQuantity: 1,

            },
        },
        {
            id: '2',
            regNumber: 'РВ1837РР',
            structure: "01РСПБЗН",
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
            tyres: "Laufen 19.5",
            mileage: 158656,
            date: '15.12.2021',
            filters: {
                type: "blala"
            },
        },
        {
            id: '3',
            regNumber: 'РВ1836РР',
            structure: "01РСПБЗН",
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
            date: '02.12.2021',
            filters: {
                type: "blala"
            },
        },
        {
            id: '4',
            regNumber: 'РВ5741ТР',
            structure: "УПБЗН-СЪЕДИНЕНИЕ",
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
            date: '01.11.2021',
            filters: {
                type: "blala"
            },
        },
        {
            id: '5',
            regNumber: 'РВ0007ТР',
            structure: "УПБЗН-СЪЕДИНЕНИЕ",
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
            date: '18.12.2021',
            filters: {
                type: "blala"
            },
        },
        {
            id: '6',
            regNumber: 'РВ0007ТР',
            structure: "УПБЗН-СЪЕДИНЕНИЕ",
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
            date: '20.04.2021',
            filters: {
                type: "blala"
            },
        },
        {
            id: '7',
            regNumber: 'РВ6923РМ',
            structure: "01 РСПБЗН",
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
                type: "blala"
            },
        },
        {
            id: '8',
            regNumber: 'РВ3628АВ',
            structure: "01 РСПБЗН",
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
            date: '11.03.2020',
            filters: {
                oilFilter: "Маслен филтър",
                oilFilterQuantity: 2
            },
        },
    ])

    const [ repairs, setRepairs ] = useState([
        {
            id: '1',
            regNumber: 'РВ6923РМ',
            structure: "01РСПБЗН",
            date: '01.12.2021',
            description: 'some repair',
            price: 23.00
        },
        {
            id: '2',
            regNumber: 'РВ1837РР',
            structure: "01РСПБЗН",
            date: '15.12.2021',
            description: 'some repair',
            price: 13.99
        },
        {
            id: '3',
            regNumber: 'РВ1836РР',
            structure: "01РСПБЗН",
            date: '02.12.2021',
            description: 'some repair',
            price: 157.33
        },
        {
            id: '4',
            regNumber: 'РВ5741ТР',
            structure: "УПБЗН-СЪЕДИНЕНИЕ",
            date: '01.11.2021',
            description: 'some repair',
            price: 45.00
        },
        {
            id: '5',
            regNumber: 'РВ0007ТР',
            structure: "УПБЗН-СЪЕДИНЕНИЕ",
            date: '18.12.2021',
            description: 'some repair',
            price: 58.78
        },
        {
            id: '6',
            regNumber: 'РВ0007ТР',
            structure: "УПБЗН-СЪЕДИНЕНИЕ",
            date: '20.04.2021',
            description: 'some repair',
            price: 215.45
        },
        {
            id: '7',
            regNumber: 'РВ6923РМ',
            structure: "01 РСПБЗН",
            date: '13.03.2021',
            description: 'some repair',
            price: 147.78
        },
        {
            id: '8',
            regNumber: 'РВ3628АВ',
            structure: "01 РСПБЗН",
            date: '11.03.2020',
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
            }
            return card;
        }))
    }

    function deleteTruck(id) {
        setCards(cards.filter((card) => card.id !== id));
    }

    function deleteService(id) {
        setServices(services.filter((service) => service.id !== id));
    }

    function deleteRepair(id) {
        setRepairs(repairs.filter((repair) => repair.id !== id));
    }


    function deleteFueling(id) {
        setFuelings(fuelings.filter((fueling) => fueling.id !== id));
    }

    return (
        <div className="content">
            <SearchBar search={setQuery} setSearchCriteria={setCriteria} />
            <Outlet context={{
                cards: cards.filter((card) => card[ `${criteria}` ].toLowerCase().includes(query.toLowerCase())),
                addTruck,
                editTruck,
                deleteTruck,
                repairs: repairs.filter((repair) => repair[ `${criteria}` ].toLowerCase().includes(query.toLowerCase())),
                deleteRepair,
                fuelings: fuelings.filter((fueling) => fueling[ `${criteria}` ].toLowerCase().includes(query.toLocaleLowerCase())),
                deleteFueling,
                services: services.filter((service) => service[ `${criteria}` ].toLowerCase().includes(query.toLocaleLowerCase())),
                deleteService,
            }} />
        </div>
    )
}
