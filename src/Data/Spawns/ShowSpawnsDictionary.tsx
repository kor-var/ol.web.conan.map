export interface IShowSpawnsDictionary {
    [key: string]: boolean;
}

export  class ShowSpawnsDictionary implements IShowSpawnsDictionary {
    constructor() {
        this.MiniBossWildlifeMinibossJaguar = false;
        this.CritterWildlifeJaguarCub = false;
        this.CritterWildlifeKappaGreenBaby = false;
        this.MiniBossWildlifeMinibossKappaRed = false;
        this.MiniBossWildlifeKappaKing = false;
        this.MiniBossWildlifeMinibossLocustYellowNeon = false;
        this.WorldBossWildlifeLocustQueenDesert = false;
        this.MiniBossWildlifeMinibossRocknose = false;
        this.MiniBossWildlifeMinibossTiger = false;
        this.CritterWildlifeTigerCub = false;
        this.MiniBossWildlifeRocknoseKingMolten = false;
        this.WorldBossWildlifeTigerWhite = false;
        this.PriestExilePriest4Hyrkanian = false;
        this.PriestExilePriest4Nordheimer = false;
        this.DialogNPCDialogueMurielatheArtisan = false;
        this.MiniBossWildlifeReptileBeastBoss = false;
        this.MiniBossWildlifeMinibossWolf = false;
        this.CritterWildlifeWolfPuppy = false;
        this.MiniBossWildlifeMinibossReptileCrocodile = false;
        this.CritterWildlifeReptileCrocodileBaby = false;
        this.WorldBossBossCrocodileGiant = false;
        this.CritterWildlifeLionCub = false;
        this.MiniBossWildlifeLion = false;
        this.MerchantNPCMerchantF1 = false;
        this.MerchantNPCMerchantF2 = false;
        this.MerchantNPCMerchantF3 = false;
        this.MerchantNPCMerchantM1 = false;
        this.MerchantNPCMerchantM2 = false;
        this.MerchantNPCMerchantM3 = false;
        this.MerchantNPCMerchantM4 = false;
        this.MerchantNPCMerchantM5 = false;
        this.PriestRelicHunterPriest4Zingarian = false;
        this.WorldBossWildlifeDragonRed = false;
        this.MiniBossRelicHunterTreasureseekerBoss8 = false;
        this.MiniBossRelicHunterTreasureseekerBoss2 = false;
        this.MiniBossRelicHunterTreasureseekerBoss6 = false;
        this.MiniBossRelicHunterTreasureseekerBoss5 = false;
        this.MiniBossRelicHunterTreasureseekerBoss4 = false;
        this.MiniBossRelicHunterTreasureseekerBoss3 = false;
        this.MiniBossRelicHunterTreasureseekerBoss1 = false;
        this.MiniBossRelicHunterTreasureseekerBoss7 = false;
        this.ArcherRelicHunterTreasureseeker12 = false;
        this.ArcherRelicHunterTreasureseeker14 = false;
        this.FighterRelicHunterTreasureseeker4 = false;
        this.FighterRelicHunterTreasureseeker1 = false;
        this.FighterRelicHunterTreasureseeker6 = false;
        this.FighterRelicHunterTreasureseeker2 = false;
        this.ArcherRelicHunterTreasureseeker11 = false;
        this.FighterRelicHunterTreasureseeker5 = false;
        this.ArcherRelicHunterTreasureseeker15 = false;
        this.ArcherRelicHunterTreasureseeker10 = false;
        this.FighterRelicHunterTreasureseeker8 = false;
        this.FighterRelicHunterTreasureseeker3 = false;
        this.FighterRelicHunterTreasureseeker7 = false;
        this.ArcherRelicHunterTreasureseeker13 = false;
        this.ArcherRelicHunterTreasureseeker9 = false;
        this.WorldBossBossSpiderGiant = false;
        this.WorldBossWildlifeYetiBlack = false;
        this.MiniBossWildlifeMinibossJungleBirdGrey = false;
        this.WorldBossWildlifeRhinoKing = false;
        this.MiniBossWildlifeRocknoseKing = false;
        this.MiniBossWildlifeRocknoseKingBoss = false;
        this.TaskmasterRelicHunterSlavetakerTaskmaster4 = false;
        this.MiniBossWildlifeWildBoarBoss = false;
        this.CritterWildlifeWildBoarPiglet = false;
        this.CritterWildlifeHoovedGazelleFawn = false;
        this.ArcherBlackHandPirArcher4Cimmerian = false;
        this.ArcherBlackHandPirArcher4Hyborian = false;
        this.ArcherBlackHandPirArcher4Hyrkanian = false;
        this.FighterDungeonSagDogsFighter3Zamorian = false;
        this.FighterDungeonSagDogsFighter3Shemite = false;
        this.FighterDungeonSagDogsFighter3Stygian = false;
        this.ArmorerRelicHunterArmorer4Shemite = false;
        this.ArmorerRelicHunterArmorer4Hyborian = false;
        this.ArmorerRelicHunterArmorer4Zamorian = false;
        this.ArmorerRelicHunterArmorer4Aquilonian = false;
        this.ArmorerRelicHunterArmorer4Zingaran = false;
        this.ArmorerRelicHunterArmorer4Hyrkanian = false;
        this.ArmorerRelicHunterArmorer4Stygian = false;
        this.ArcherDungeonSagDogsArcher3Stygian = false;
        this.ArcherDungeonSagDogsArcher3Shemite = false;
        this.ArcherDungeonSagDogsArcher3Zamorian = false;
        this.MerchantNPCMerchantM9 = false;
        this.MerchantNPCMerchantM10 = false;
        this.FighterTeimos = false;
        this.BlacksmithRelicHunterBlacksmith4Shemite = false;
        this.BlacksmithRelicHunterBlacksmith4Stygian = false;
        this.ArcherRelicHunterArcher4Hyborian = false;
        this.ArcherRelicHunterArcher4Hyrkanian = false;
        this.WorldBossDungeonSagWerewolfBoss = false;
        this.PriestRelichunterPriestBoss = false;
        this.CarpenterRelicHunterCarpenter4Zingarian = false;
        this.CookRelicHunterCook4Hyborian = false;
        this.SmelterRelicHunterSmelter4Shemite = false;
        this.TannerRelicHunterTanner4Zingarian = false;
        this.PerformerRelicHunterEntertainer4Zamorian = false;
        this.PerformerRelicHunterEntertainer4Stygian = false;
        this.ArcherDogsArcher4Zamorian = false;
        this.MiniBossWildlifeMinibossHyenaAlpha = false;
        this.CritterWildlifeHyenaStripedPuppy = false;
        this.FighterHeirsoftheNorthFighter4Nordheimer = false;
        this.ArcherVotariesArcher4bhostile = false;
        this.ArcherVotariesArcher4hostile = false;
        this.FighterBlackHandPirFighter4Cimmerian = false;
        this.FighterBlackHandPirFighter4Nordheimer = false;
        this.MiniBossWildlifeMinibossSabretooth = false;
        this.CritterWildlifeSabretoothCub = false;
        this.CritterWildlifeHyenaSpottedPuppy = false;
        this.WorldBossWildlifeScorpionKing = false;
        this.MiniBossWildlifeMinibossGreyApe = false;
        this.ArcherHeirsoftheNorthArcher4Nordheimer = false;
        this.TannerDarfariCannibalsTanner4Darfari = false;
        this.MiniBossWildlifeHoovedElkKing = false;
        this.PerformerDarfariCannibalsEntertainer4Darfari = false;
        this.ArmorerDarfariCannibalsArmorer4Darfari = false;
        this.CarpenterDarfariCannibalsCarpenter4Darfari = false;
        this.CookDarfariCannibalsCook4Darfari = false;
        this.CookDarfariCannibalsCook4Darfari2 = false;
        this.MiniBossBlackHandFighter3BlackCorsair = false;
        this.CarpenterHeirsoftheNorthCarpenter4Nordheimer = false;
        this.BlacksmithHeirsoftheNorthBlacksmith4Nordheimer = false;
        this.SmelterHeirsoftheNorthSmelter4Nordheimer = false;
        this.TaskmasterHeirsoftheNorthTaskmaster4Nordheimer = false;
        this.ArmorerHeirsoftheNorthArmorer4Nordheimer = false;
        this.TannerHeirsoftheNorthTanner4Nordheimer = false;
        this.PerformerHeirsoftheNorthEntertainer4Nordheimer = false;
        this.FighterBlackHandFighter4Nordheimer = false;
        this.ArcherBlackHandArcher4Hyrkanian = false;
        this.FighterBlackHandFighter4Cimmerian = false;
        this.ArcherBlackHandArcher4Hyborian = false;
        this.ArmorerRelicHunterSlavetakerArmorer4 = false;
        this.AlchemistRelicHunterAlchemist4Zingarian = false;
        this.FighterCaptainsBodyguardUndina = false;
        this.PerformerBlackHandEntertainer4Zamorian = false;
        this.PerformerBlackHandEntertainer4Stygian = false;
        this.WorldBossWildlifeScorpionQueen = false;
        this.FighterVotariesFighter4 = false;
        this.FighterVotariesFighter4b = false;
        this.BearerSherpaStygian4 = false;
        this.BearerSherpaDarfari4 = false;
        this.BearerSherpaShemite4 = false;
        this.BearerSherpaZingaran4 = false;
        this.BearerSherpaZamorian4 = false;
        this.BearerSherpaKushite4 = false;
        this.BearerSherpaHyrkanian4 = false;
        this.BearerSherpaHyborian4 = false;
        this.BearerSherpaCimmerian4 = false;
        this.BearerSherpaNordheimer4 = false;
        this.MerchantNPCShamalla = false;
        this.ArcherVotariesArcher4 = false;
        this.ArcherVotariesArcher4b = false;
        this.CookBlackHandCook4Hyborian = false;
        this.SmelterVotariesSmelter4 = false;
        this.WorldBossWildlifeDragonWhite = false;
        this.TaskmasterRelicHunterTaskmaster4Shemite = false;
        this.TaskmasterRelicHunterTaskmaster4Zingarian = false;
        this.TaskmasterRelicHunterTaskmaster4Zamorian = false;
        this.MiniBossWildlifeImpKing = false;
        this.MiniBossWildlifeSerpentmentBrute = false;
        this.MiniBossSobekBoss = false;
        this.MiniBossWildlifeLocustQueenSwampTomb = false;
        this.BlacksmithVotariesBlacksmith4 = false;
        this.CritterWildlifePantherCub = false;
        this.WorldBossDungeonSagWildlifeGorillaBoss = false;
        this.FighterVotariesFighter4bhostile = false;
        this.FighterVotariesFighter4hostile = false;
        this.MiniBossEmissaryHaonDor = false;
        this.TannerVotariesTanner4 = false;
        this.TaskmasterVotariesTaskmaster4 = false;
        this.WorldBossAbandonedCityBossTheBrute = false;
        this.WorldBossBossHanumanpriest = false;
        this.MiniBossBossWarmakerGhost = false;
        this.CarpenterVotariesCarpenter4 = false;
        this.ArmorerVotariesArmorer4 = false;
        this.CritterDungeonSagWildlifeSabretoothCub = false;
        this.DialogNPCVotariesOfSkelosSorcererMasterDarfari = false;
        this.MiniBossWildlifeRhinoBlack = false;
        this.CookVotariesCook4 = false;
        this.AlchemistVotariesAlchemist4 = false;
        this.PerformerVotariesEntertainer4 = false;
        this.CritterWildlifeRhinoBaby = false;
        this.MiniBossWildlifeDragonWhiteHatchling = false;
        this.WorldBossAbandonedCityBossTheCommander = false;
        this.WorldBossDungeonSagBossBull = false;
        this.CritterDungeonSagWildlifeHyenaSpottedPuppy = false;
        this.CritterDungeonSagWildlifeBearBlackCub = false;
        this.BlacksmithExileBlacksmith4Shemite = false;
        this.PerformerExileEntertainer4Zamorian = false;
        this.ArmorerExileArmorer4Hyborian = false;
        this.BlacksmithExileBlacksmith4Cimmerian = false;
        this.ArmorerExileArmorer4Zamorian = false;
        this.TannerExileTanner4Nordheimer = false;
        this.CookExileCook4Hyborian = false;
        this.ArmorerExileArmorer4Darfari = false;
        this.CarpenterExileCarpenter4Nordheimer = false;
        this.SmelterExileSmelter4Cimmerian = false;
        this.SmelterExileSmelter4Shemite = false;
        this.ArmorerExileArmorer4Kambujan = false;
        this.ArmorerExileArmorer4Hyrkanian = false;
        this.CarpenterExileCarpenter4Cimmerian = false;
        this.PerformerExileEntertainer4Stygian = false;
        this.ArmorerExileArmorer4Shemite = false;
        this.TannerExileTanner4Zingarian = false;
        this.ArmorerExileArmorer4Cimmerian = false;
        this.WorldBossWildlifeSnakeGiant = false;
        this.BlacksmithBlackHandBlacksmith4Shemite = false;
        this.SmelterBlackHandSmelter4Cimmerian = false;
        this.SmelterBlackHandSmelter4Shemite = false;
        this.ArmorerBlackHandArmorer4Zamorian = false;
        this.ArmorerBlackHandArmorer4Hyrkanian = false;
        this.ArmorerBlackHandArmorer4Hyborian = false;
        this.SmelterBlackHandSmelter4Nordheimer = false;
        this.BlacksmithBlackHandBlacksmith4Cimmerian = false;
        this.ArmorerBlackHandArmorer4Darfari = false;
        this.CarpenterBlackHandCarpenter4Cimmerian = false;
        this.ArmorerBlackHandArmorer4Kambujan = false;
        this.CarpenterBlackHandCarpenter4Nordheimer = false;
        this.TannerBlackHandTanner4Zingarian = false;
        this.MiniBossDungeonDagonWildlifeDeepOneHumanboss2 = false;
        this.MiniBossWildlifeWolfDire = false;
        this.CritterWildlifeWolfDirePuppy = false;
        this.MiniBossExileFighter4Wanderer1 = false;
        this.MiniBossExileFighter4Wanderer3 = false;
        this.MiniBossExileFighter4Wanderer5 = false;
        this.MiniBossExileFighter4Wanderer10 = false;
        this.MiniBossExileFighter4Wanderer6 = false;
        this.MiniBossExileFighter4Wanderer4 = false;
        this.MiniBossExileFighter4Wanderer8 = false;
        this.MiniBossExileFighter4Wanderer9 = false;
        this.MiniBossExileFighter4Wanderer7 = false;
        this.MiniBossExileFighter4Wanderer2 = false;
        this.WorldBossAbandonedCityBossFlameGuardian = false;
        this.PerformerLemurianEntertainer4 = false;
        this.CookLemurianCook4 = false;
        this.MiniBossDungeonDagonWildlifeDeepOneHumanFish2 = false;
        this.CarpenterDogsCarpenter4Zamorian = false;
        this.ArcherHeirsoftheNorthArcher4Hunter = false;
        this.WorldBossWildlifeSwampKing = false;
        this.WorldBossWildlifeElephantAlpha = false;
        this.CritterWildlifeElephantBaby = false;
        this.WorldBossBossSpiderGiantSkull = false;
        this.MiniBossDungeonDagonWildlifeDeepOneHumanFish = false;
        this.AlchemistHeirsoftheNorthAlchemist4Nordheimer = false;
        this.TaskmasterExileTaskmaster4Shemite2 = false;
        this.TaskmasterExileTaskmaster4Shemite = false;
        this.TaskmasterExileTaskmaster4Zamorian = false;
        this.FighterLemurianFighter4b = false;
        this.FighterLemurianFighter4 = false;
        this.DialogNPCDialogueYakira = false;
        this.CarpenterLemurianCarpenter4 = false;
        this.ArmorerLemurianArmorer4 = false;
        this.ArcherLemurianArcher4 = false;
        this.ArcherLemurianArcher4b = false;
        this.MiniBossBossArchivistGhost = false;
        this.ArmorerDogsArmorer4Kushite = false;
        this.PerformerDogsEntertainer4Zamorian = false;
        this.ArmorerDogsArmorer4Kambujan = false;
        this.PerformerDogsEntertainer4Stygian = false;
        this.BlacksmithDogsBlacksmith4Shemite = false;
        this.CookDogsCook4Zamorian = false;
        this.SmelterDogsSmelter4Shemite = false;
        this.PriestDarfariCannibalsPriest4Darfari3 = false;
        this.PriestDarfariCannibalsPriest4Darfari2 = false;
        this.PriestDarfariCannibalsPriest4Darfari1 = false;
        this.PriestLemurianPriestSet4Hyborian = false;
        this.PriestLemurianPriestSet4Cimmerian = false;
        this.PriestLemurianPriestSet4Zingaran = false;
        this.PriestLemurianPriestSet4Stygian = false;
        this.PriestLemurianPriestSet4Kushite = false;
        this.MerchantNPCMerchantVolcanoM1 = false;
        this.MerchantNPCMerchantVolcanoM2 = false;
        this.MiniBossDungeonDagonWildlifeDeepOneMonster = false;
        this.AlchemistDarfariCannibalsAlchemist4Darfari = false;
        this.MerchantNPCMerchantVolcanoM3 = false;
        this.CritterWildlifeOstrichFarmChicken = false;
        this.FighterDarfariCannibalsFighter4Darfari = false;
        this.FighterBlackHandTarman = false;
        this.MiniBossBossPriestKingGhost = false;
        this.FighterRelichunterRobberBoss = false;
        this.MiniBossDungeonDagonWildlifeDeepOneKeykeeper = false;
        this.FighterBlackHandSully = false;
        this.BlacksmithLemurianBlacksmith4 = false;
        this.SmelterLemurianSmelter4 = false;
        this.TannerLemurianTanner4 = false;
        this.TaskmasterLemurianTaskmaster4 = false;
        this.AlchemistLemurianAlchemist4 = false;
        this.ArcherSobekArcher1 = false;
        this.FighterExileFighter4Cimmerian = false;
        this.FighterExileFighter4Nordheimer = false;
        this.FighterDungeonDagonWildlifeDeepOneHuman3 = false;
        this.FighterDungeonDagonWildlifeDeepOneHuman1 = false;
        this.FighterDungeonDagonWildlifeDeepOneHuman4 = false;
        this.FighterDungeonDagonWildlifeDeepOneHuman2 = false;
        this.MerchantNPCMerchantM7 = false;
        this.WorldBossBossSpiderGiantSkull2 = false;
        this.WorldBossBossTheKinscourge = false;
        this.AlchemistDogsAlchemist4Zamorian = false;
        this.FighterDogsNbatu = false;
        this.WorldBossDungeonDagonWildlifeDeepOneHumanendboss = false;
        this.MerchantNPCZeina = false;
        this.WorldBossDungeonSagWildlifePantherBoss = false;
        this.MiniBossDungeonDagonWildlifeDeepOneMonster2 = false;
        this.TaskmasterDogsTaskmaster4Shemite = false;
        this.TaskmasterDogsTaskmaster4Zamorian = false;
        this.MerchantNPCWeeba = false;
        this.WorldBossBossSoulCaptor = false;
        this.MiniBossBlackHandFighter4Wanderer9 = false;
        this.MiniBossBlackHandFighter4Wanderer10 = false;
        this.MiniBossBlackHandFighter4Wanderer7 = false;
        this.MiniBossBlackHandFighter4Wanderer6 = false;
        this.MiniBossBlackHandFighter4Wanderer3 = false;
        this.MiniBossBlackHandFighter4Wanderer8 = false;
        this.MiniBossBlackHandFighter4Wanderer4 = false;
        this.MiniBossBlackHandFighter4Wanderer1 = false;
        this.MiniBossBlackHandFighter4Wanderer2 = false;
        this.MiniBossBlackHandFighter4Wanderer5 = false;
        this.FighterDungeonDagonWildlifeDeepOnePrisoner3 = false;
        this.FighterDungeonDagonWildlifeDeepOnePrisoner2 = false;
        this.FighterDungeonDagonWildlifeDeepOnePrisoner1 = false;
        this.FighterDungeonDagonWildlifeDeepOnePrisoner4 = false;
        this.TaskmasterBlackHandTaskmaster4Shemite = false;
        this.TaskmasterBlackHandTaskmaster4Zamorian = false;
        this.MiniBossBossArenaChampion = false;
        this.WorldBossAbandonedCityBossTheWatcher = false;
        this.ArcherDogsBeastlord = false;
        this.PriestDogsPriest4Stygian = false;
        this.PriestDogsPriest4Zamorian = false;
        this.CookBlackHandRumRunnerVald = false;
        this.WorldBossWildlifeFrostGiantBoss = false;
        this.WorldBossAbandonedCityBossTheGraveWalker = false;
        this.CookHeirsoftheNorthCook4Nordheimer = false;
        this.CookRelichunterFishermanBoss = false;
        this.MiniBossManOnTheWall = false;
        this.DialogNPCDialoguePetrusotheSandstormManiac = false;
        this.MiniBossWildlifeMinibossBearBrown = false;
        this.CritterWildlifeBearBrownCub = false;
        this.WorldBossBossUndeadDragonWarmaker = false;
        this.DialogNPCDialogueConan = false;
        this.WorldBossWildlifeMummyTorturedBoss = false;
        this.TaskmasterDarfariCannibalsTaskmaster4Darfari = false;
        this.WorldBossBossWarmakerChampion = false;
        this.MerchantNPCMerchantM8 = false;
        this.MerchantNPCMerchantM6 = false;
        this.WorldBossBlackHandCook4HyborianGord = false;
        this.MiniBossEmissaryAbhoth = false;
        this.WorldBossDunkas = false;
        this.WorldBossAbandonedCityBossWingedDeath = false;
        this.DialogNPCDialogueOutcast = false;
        this.MiniBossDungeonDagonWildlifeDeepOneHumanboss3 = false;
        this.DialogNPCDialogueGilzantheTreasureHunter = false;
        this.MiniBossEmissaryTsathoggua = false;
        this.MiniBossEmissaryAtlachNacha = false;
        this.WorldBossAbandonedCityBossTheRedMother = false;
        this.MiniBossWildlifeDragonRedHatchling = false;
        this.FighterVotariesIssis = false;
        this.FighterDarfariCannibalsThugra = false;
        this.FighterVotariesAssin = false;
        this.WorldBossWildlifeDragonGreen = false;
        this.MiniBossWildlifeDragonGreenHatchling = false;
        this.WorldBossBossGateGuardian = false;
        this.DialogNPCDialogueTheArchivist = false;
        this.DialogNPCDialogueArcostheWanderer = false;
        this.DialogNPCDialogueChildofJhebbalSag = false;
        this.DialogNPCDialogueJamilathePirateQueen = false;
        this.DialogNPCDialogueWarmakerKlael = false;
        this.DialogNPCDialogueMekkamoses = false;
        this.DialogNPCDialogueNunutheCannibal = false;
        this.MiniBossWitchQueenStatue = false;
        this.FighterBlackHandCaptain = false;
        this.FighterBlackHandCaptainIoushuwa = false;
        this.DialogNPCDialogueRazma = false;
        this.WorldBossBossKingBeneath = false;
        this.FighterDarfariCannibalsRitualist = false;
        this.MiniBossBossBatDemonWhite = false;
        this.AlchemistDarfariWitchDoctor = false;
        this.MiniBossDungeonDagonWildlifeDeepOneHumanboss1 = false;
        this.WorldBossBossUndeadDragon = false;
        this.DialogNPCDialogueMountaineer = false;
        this.MerchantNPCMerchantF4 = false;
        this.WorldBossWildlifeLocustQueenSwamp = false;
        this.WorldBossWildlifeSerpentmenBossPriest = false;
        this.MiniBossWildlifeSerpentmenBossHive = false;
        this.MiniBossWildlifeSerpentmenBossSlaver = false;
        this.MiniBossWildlifeSerpentmenBossSmelter = false;
        this.WorldBossWitchQueen = false;
        this.WorldBossWildlifeUndeadLizardManTheExecutioner = false;
        this.WorldBossWildlifeDemonSpider = false;
        this.ArcherExileArcher4Hyrkanian = false;
        this.ArcherExileArcher4Hyborian = false;
        this.AlchemistExileAlchemist4Hyborian = false;
        this.MiniBossBossCrocodileGiantTomb = false;
        this.WorldBossWildlifeSewerAbomination = false;
        this.FighterForgottenTribeBerserker = false;
        this.FighterForgottenTribeFighter4Cimmerian = false;
        this.CookForgottenTribeCook4Cimmerian = false;
        this.BlacksmithForgottenTribeBlacksmith4Cimmerian = false;
        this.CarpenterForgottenTribeCarpenter4Cimmerian = false;
        this.ArmorerForgottenTribeArmorer4Cimmerian = false;
        this.SmelterForgottenTribeSmelter4Cimmerian = false;
        this.TannerForgottenTribeTanner4Cimmerian = false;
        this.PerformerForgottenTribeEntertainer4Cimmerian = false;
        this.TaskmasterForgottenTribeTaskmaster4Cimmerian = false;
        this.DialogNPCDialogueBraga = false;
        this.AlchemistForgottenTribeAlchemist4Cimmerian = false;
        this.MiniBossWildlifeChildrenofJhilminiboss = false;
        this.WorldBossWildlifeChildrenofJhilshrouded = false;
        this.WorldBossWildlifeChildrenofJhilfiend = false;
        this.WorldBossWildlifeChildrenofJhilnestmother = false;
        this.WorldBossWildlifeChildrenofJhilfeastsonflesh = false;
        this.FighterHeirsoftheNorthLian = false;
        this.ArcherHeirsoftheNorthFreya = false;
        this.MiniBossWildlifeBearNordheimerBoss = false;
        this.PriestAnasteratheSeeress = false;
        this.WorldBossLadagaraDaughterOfYmir = false;
        this.MiniBossHeirsoftheNorthChieftain2 = false;
        this.MiniBossHeirsoftheNorthChieftain6 = false;
        this.MiniBossHeirsoftheNorthChieftain5 = false;
        this.MiniBossHeirsoftheNorthChieftain3 = false;
        this.MiniBossHeirsoftheNorthChieftain4 = false;
        this.MiniBossHeirsoftheNorthChieftain8 = false;
        this.MiniBossHeirsoftheNorthChieftain7 = false;
        this.MiniBossHeirsoftheNorthChieftain10 = false;
        this.MiniBossHeirsoftheNorthChieftain9 = false;
        this.MiniBossHeirsoftheNorthChieftain1 = false;
        this.TaskmasterRelicHunterTombRaiderTaskmaster4 = false;
        this.MiniBossWildlifeWightMiniBoss = false;
        this.DialogNPCDialogueBlacksmithGhost = false;
        this.MiniBossWildlifeRocknoseKingIce = false;
        this.CritterWildlifeBearBlackCub = false

    }
    [key: string]: boolean;
}