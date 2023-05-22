export interface IIconsDictionary {
    [key: string]: string;
}

export class IconsSpawns implements IIconsDictionary {
    constructor() {
        this.baseUrl = "https://gamepedia.cursecdn.com/conanexiles_gamepedia/thumb";
        // -------------------------------------------------------------------------------------------------------------
        // SPAWNS
        this.focus = this.baseUrl + "/1/10/MapMarker_filter.png/20px-MapMarker_filter.png";
        this.Profession = this.baseUrl + "/a/ad/MapMarker_prof.png/20px-MapMarker_prof.png?version=348ca14b1b58bbbcee6c2cbb82dd4277";
        this.Archer = this.baseUrl + "/2/27/MapMarker_archerT4.png/20px-MapMarker_archerT4.png";
        this.ArcherT4 = this.baseUrl + "/2/27/MapMarker_archerT4.png/20px-MapMarker_archerT4.png";
        this.Fighter = this.baseUrl + "/7/73/MapMarker_fighter.png/20px-MapMarker_fighter.png?version=18c90209b06edcdbaa73bfca06ae257b";
        this.FighterT4 = this.baseUrl + "/e/e9/MapMarker_fighterT4.png/20px-MapMarker_fighterT4.png?version=d159499d55c49bd6be30c090b6b314bf";
        this.ProfessionT4 = this.baseUrl + "/8/87/MapMarker_proft4.png/20px-MapMarker_proft4.png?version=ce7d3e0850cf7be4cc6e83ee0eb3fbbc";
        this.Alchemist = this.baseUrl + "/2/2f/MapMarker_alchemistT4.png/20px-MapMarker_alchemistT4.png?version=4fbdf59d0cbfe93b0d16a0329749dce7";
        this.Armorer = this.baseUrl + "/8/8f/MapMarker_armorerT4.png/20px-MapMarker_armorerT4.png";
        this.Bearer = this.baseUrl + "/9/9d/MapMarker_bearerT4.png/20px-MapMarker_bearerT4.png";
        this.Blacksmith = this.baseUrl + "/a/a3/MapMarker_blacksmithT4.png/20px-MapMarker_blacksmithT4.png";
        this.Carpenter = this.baseUrl + "/b/b6/MapMarker_carpenterT4.png/20px-MapMarker_carpenterT4.png";
        this.Cook = this.baseUrl + "/6/65/MapMarker_cookT4.png/20px-MapMarker_cookT4.png";
        this.Performer = this.baseUrl + "/5/59/MapMarker_performerT4.png/20px-MapMarker_performerT4.png";
        this.Priest = this.baseUrl + "/3/3f/MapMarker_priestT4.png/20px-MapMarker_priestT4.png?version=f43e22fff326a283789ab946a113ae2e";
        this.Smelter = this.baseUrl + "/b/b1/MapMarker_smelterT4.png/20px-MapMarker_smelterT4.png?version=f6b02e702ffc57490eb2dc18a6fb3e1c";
        this.Tanner = this.baseUrl + "/1/12/MapMarker_tannerT4.png/20px-MapMarker_tannerT4.png?version=c3f3dd9f7cdbff04dfc049a664c332c7";
        this.Taskmaster = this.baseUrl + "/4/45/MapMarker_taskmasterT4.png/20px-MapMarker_taskmasterT4.png";
        this.DialogNPC = this.baseUrl + "/3/3a/MapMarker_dialog_npc.png/20px-MapMarker_dialog_npc.png?version=de44993072c8eafb45fe13c8d2ad7582";
        this.MerchantNPC = this.baseUrl + "/a/a3/MapMarker_merchant.png/20px-MapMarker_merchant.png";
        this.WorldBoss = this.baseUrl + "/8/84/MapMarker_worldboss.png/20px-MapMarker_worldboss.png";
        this.MiniBoss = this.baseUrl + "/c/c0/MapMarker_miniboss.png/20px-MapMarker_miniboss.png";
        this.Critter = this.baseUrl + "/0/08/MapMarker_pet.png/20px-MapMarker_pet.png";
        this.CritterLion = this.baseUrl + "/e/ec/MapMarker_petLion.png/20px-MapMarker_petLion.png";
        this.CritterLionCub = this.baseUrl + "/e/ec/MapMarker_petLion.png/20px-MapMarker_petLion.png";
        this.CritterTiger = this.baseUrl + "/4/49/MapMarker_petTiger.png/20px-MapMarker_petTiger.png";
        this.CritterTigerCub = this.baseUrl + "/4/49/MapMarker_petTiger.png/20px-MapMarker_petTiger.png";
        this.CritterPanther = this.baseUrl + "/3/3d/MapMarker_petPanther.png/20px-MapMarker_petPanther.png";
        this.CritterPantherCub = this.baseUrl + "/3/3d/MapMarker_petPanther.png/20px-MapMarker_petPanther.png";
        this.CritterWolf = this.baseUrl + "/c/c1/MapMarker_petWolf.png/20px-MapMarker_petWolf.png";
        this.CritterWolfPup = this.baseUrl + "/c/c1/MapMarker_petWolf.png/20px-MapMarker_petWolf.png";
        this.CritterCrocodile = this.baseUrl + "/7/72/MapMarker_petCrocodile.png/20px-MapMarker_petCrocodile.png?version=1bc258d2f5aa7ee5cc4b0a720506dd4e";
        this.CritterDireWolf = this.baseUrl + "/3/36/MapMarker_petFrostwolf.png/20px-MapMarker_petFrostwolf.png?version=ecf2032e1d6efde45ff6512691f361cc";
        this.CritterDireWolfPup = this.baseUrl + "/3/36/MapMarker_petFrostwolf.png/20px-MapMarker_petFrostwolf.png?version=ecf2032e1d6efde45ff6512691f361cc";
        this.CritterOstrich = this.baseUrl + "/c/c8/MapMarker_petOstrich.png/20px-MapMarker_petOstrich.png?version=955f959f31bec98f891e7a1599b540c1";
        this.CritterWildBoar = this.baseUrl + "/5/56/MapMarker_petBoarShoat.png/20px-MapMarker_petBoarShoat.png";
        this.CritterWildBoarPiglet = this.baseUrl + "/5/56/MapMarker_petBoarShoat.png/20px-MapMarker_petBoarShoat.png";
        this.CritterKappa = this.baseUrl + "/c/ca/MapMarker_petKappa.png/20px-MapMarker_petKappa.png";
        this.CritterFawn = this.baseUrl + "/5/56/MapMarker_petFawn.png/20px-MapMarker_petFawn.png";
        this.CritterStripedHyena = this.baseUrl + "/c/cf/MapMarker_petStripedHyena.png/20px-MapMarker_petStripedHyena.png";
        this.CritterStripedHyenaPuppy = this.baseUrl + "/c/cf/MapMarker_petStripedHyena.png/20px-MapMarker_petStripedHyena.png";
        this.CritterSpottedHyena = this.baseUrl + "/3/34/MapMarker_petSpottedHyena.png/20px-MapMarker_petSpottedHyena.png";
        this.CritterSpottedHyenaPuppy = this.baseUrl + "/3/34/MapMarker_petSpottedHyena.png/20px-MapMarker_petSpottedHyena.png";
        this.CritterSabretooth = this.baseUrl + "/a/a8/MapMarker_petSabretooth.png/20px-MapMarker_petSabretooth.png";
        this.CritterSabretoothCub = this.baseUrl + "/a/a8/MapMarker_petSabretooth.png/20px-MapMarker_petSabretooth.png";
        this.CritterJaguar = this.baseUrl + "/3/33/MapMarker_petJaguar.png/20px-MapMarker_petJaguar.png";
        this.CritterJaguarCub = this.baseUrl + "/3/33/MapMarker_petJaguar.png/20px-MapMarker_petJaguar.png";
        this.CritterRhino = this.baseUrl + "/5/5f/MapMarker_petRhino.png/20px-MapMarker_petRhino.png";
        this.CritterElephant = this.baseUrl + "/5/53/MapMarker_petElephant.png/20px-MapMarker_petElephant.png";
        this.CritterBrownBear = this.baseUrl + "/6/62/MapMarker_petBrownBear.png/20px-MapMarker_petBrownBear.png";
        this.CritterBlackBearCub = this.baseUrl + "/0/08/MapMarker_pet.png/20px-MapMarker_pet.png";
        this.CritterHyena = this.baseUrl + "/0/08/MapMarker_pet.png/20px-MapMarker_pet.png";
        this.CritterHyenaPuppy = this.baseUrl + "/0/08/MapMarker_pet.png/20px-MapMarker_pet.png";
    }
    [key: string]: string;
}

export class IconsPOI implements IIconsDictionary {
    constructor() {
        this.baseUrl = "https://gamepedia.cursecdn.com/conanexiles_gamepedia/thumb";
        // -------------------------------------------------------------------------------------------------------------
        // POINTS OF INTEREST
        this.T_Map_Icon_ruins = this.baseUrl + "/7/77/T_Map_Icon_ruins.png/20px-T_Map_Icon_ruins.png?version=b6955048169f64138597c5ea4e5d1582";
        this.T_Map_dungeonIcon = this.baseUrl + "/b/b4/T_Map_dungeonIcon.png/20px-T_Map_dungeonIcon.png?version=fa70bd002ec55a146d74a4a2415bc8c2";
        this.T_Map_Icon_vista = this.baseUrl + "/a/ac/T_Map_Icon_vista.png/20px-T_Map_Icon_vista.png?version=2fd46d688ce2a8c4377508c8a4e4dba8";
        this.T_Map_caveIcon = this.baseUrl + "/4/44/T_Map_caveIcon.png/20px-T_Map_caveIcon.png?version=be60f611057bac1a6e86212d21de9869";
        this.T_Map_campIcon = this.baseUrl + "/2/25/T_Map_campIcon.png/20px-T_Map_campIcon.png?version=0dc7836173b646ae1a394d25f5e56668";
        // POINTS OF INTEREST - FACTION CAMPS
        this.T_Map_Icon_camp_black_hand = this.baseUrl + "/a/aa/T_Map_Icon_camp_black_hand.png/20px-T_Map_Icon_camp_black_hand.png?version=5bb7561647bac087456b00016edb5e93";
        this.T_Map_Icon_camp_darfari = this.baseUrl + "/1/1f/T_Map_Icon_camp_darfari.png/20px-T_Map_Icon_camp_darfari.png?version=0a9e61234ea2ddcf6b9895a808037d98";
        this.T_Map_Icon_camp_vanir = this.baseUrl + "/1/14/T_Map_Icon_camp_vanir.png/20px-T_Map_Icon_camp_vanir.png?version=2d26b3d81ffb6c6ebd0c4cd2efbb761e";
        this.T_Map_Icon_camp_frost_giant = this.baseUrl + "/d/d8/T_Map_Icon_camp_frost_giant.png/20px-T_Map_Icon_camp_frost_giant.png?version=7aa197a07ab1d3917370002c90b50e88";
        this.T_Map_Icon_camp_cimmerian = this.baseUrl + "/a/a9/T_Map_Icon_camp_cimmerian.png/20px-T_Map_Icon_camp_cimmerian.png?version=73c84f7a0e1a5755be4f18ff38f1663e";
        this.T_Map_Icon_camp_relic_hunters = this.baseUrl + "/f/fd/T_Map_Icon_camp_relic_hunters.png/20px-T_Map_Icon_camp_relic_hunters.png?version=01a060eeb54f06a8123492b293e10f8f";
        this.T_Map_Icon_camp_lemurian = this.baseUrl + "/3/34/T_Map_Icon_camp_lemurian.png/20px-T_Map_Icon_camp_lemurian.png?version=cad09d4047cfc3bd075cc855a516cdbd";
        this.T_Map_Icon_camp_exiles = this.baseUrl + "/7/7f/T_Map_Icon_camp_exiles.png/20px-T_Map_Icon_camp_exiles.png?version=cc1b8b6b476edd9906c1dc77eeb18170";
        this.T_Map_Icon_camp_dogs_of_the_desert = this.baseUrl + "/5/5e/T_Map_Icon_camp_dogs_of_the_desert.png/20px-T_Map_Icon_camp_dogs_of_the_desert.png?version=a9b6878125b601849d9d1e360be6341b";
        // POINTS OF INTEREST - CAPITALS
        this.T_Map_Icon_capital_black_handthis =  "/4/45/T_Map_Icon_capital_black_hand.png/26px-T_Map_Icon_capital_black_hand.png?version=28e143a4edb4ccd6e5a658adf78cafdc";
        this.T_Map_Icon_capital_relic_huntersthis =  "/2/28/T_Map_Icon_capital_relic_hunters.png/26px-T_Map_Icon_capital_relic_hunters.png?version=389ab40f7bb2133a52228de4ac86a4e3";
        this.T_Map_Icon_capital_dogs_of_the_desertthis =  "/0/06/T_Map_Icon_capital_dogs_of_the_desert.png/26px-T_Map_Icon_capital_dogs_of_the_desert.png?version=1fed5eb629a2feda55a759bf3b446d2c";
        this.T_Map_Icon_capital_vanirthis =  "/6/6b/T_Map_Icon_capital_vanir.png/26px-T_Map_Icon_capital_vanir.png?version=7c05cfa852763cc818440b34e39069f2";
        this.T_Map_Icon_capital_cimmerianthis =  "/4/4d/T_Map_Icon_capital_cimmerian.png/26px-T_Map_Icon_capital_cimmerian.png?version=15ebf79a82c9c8c6183dc1aab4b6bb10";
        this.T_Map_Icon_capital_unnamed_citythis =  "/0/0d/T_Map_Icon_capital_unnamed_city.png/26px-T_Map_Icon_capital_unnamed_city.png?version=d5b451f6f7a6a7236890811f59ba72fd";
        this.T_Map_Icon_capital_darfarithis =  "/8/81/T_Map_Icon_capital_darfari.png/26px-T_Map_Icon_capital_darfari.png?version=a7063a88c336267b50bb4a5f77d10828";
        this.T_Map_Icon_capital_frost_giantthis =  "/0/00/T_Map_Icon_capital_frost_giant.png/26px-T_Map_Icon_capital_frost_giant.png?version=718060f62fbceb01432b13323bcd2e8f";
        this.T_Map_Icon_capital_lemurianthis =  "/d/d4/T_Map_Icon_capital_lemurian.png/26px-T_Map_Icon_capital_lemurian.png?version=818967512f3f558f835a11db9f74d55a";
        // POINTS OF INTEREST - OBELISKS
        this.T_Map_Icon_generic_stamp_5 = this.baseUrl + "/a/a3/T_Map_Icon_generic_stamp_5.png/20px-T_Map_Icon_generic_stamp_5.png?version=2c5a8a8e164f40c40228180401ea6049";
    }
    [key: string]: string;
}

export class IconsMisc implements IIconsDictionary{
    constructor() {
        this.baseUrl = "https://gamepedia.cursecdn.com/conanexiles_gamepedia/thumb";
        // -------------------------------------------------------------------------------------------------------------
        // MISC
        this.misc_feat = this.baseUrl + "/4/47/T_Map_Icon_stamp_loreObject.png/20px-T_Map_Icon_stamp_loreObject.png?version=7aa38882f221f04273f4e97e03f5d1cc";
        this.misc_emote = this.baseUrl + "/2/20/T_Map_avatarIcon.png/20px-T_Map_avatarIcon.png?version=5b372fc04ab5324eaf0f3b2c75926aaa";
        this.misc_lore = this.baseUrl + "/0/0f/T_Map_Icon_generic_stamp_1.png/20px-T_Map_Icon_generic_stamp_1.png?version=d0509c2b58c54d41b4b3254c5774a7d6";
    }
    [key: string]: string;
}