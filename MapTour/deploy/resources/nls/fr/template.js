﻿define(
({
		viewer: {
			loading: {
				step1: "CHARGEMENT DE L’APPLICATION",
				step2: "CHARGEMENT DES DONNEES",
				step3: "INITIALISATION DE LA VISITE",
				fail: "Le chargement de Map Tour a échoué",
				failButton: "Réessayez"
			},
			errors: {
				boxTitle: "Une erreur s’est produite",
				invalidConfig: "Erreur fatale : configuration non valide",
				invalidConfigOwner: "Erreur fatale : configuration non valide (propriétaire autorisé requis)",
				invalidConfigNoWebmap: "Erreur fatale : configuration non valide (carte Web et propriétaire autorisé requis)",
				createMap: "Impossible de créer la carte",
				invalidApp: "Erreur fatale : impossible de charger l’application",
				noLayer: "La carte Web ne contient pas de couche de données valide pour Map Tour.",
				noLayerNoHostedFS: "La carte Web ne contient pas de couche de données valide pour Map Tour et vous ne disposez pas des privilèges appropriés pour créer un service d’entités hébergé.",
				noLayerMobile: "Bienvenue dans l’application Web Map Tour. L’application n’est pas configurée. Le générateur Map Tour n’est pas pris en charge sur les appareils mobiles.",
				noLayerView: "Bienvenue dans l’application Web Map Tour.<br />L’application n’est pas encore configurée.",
				noBuilderWebmapData: "Le générateur Map Tour n’est pas pris en charge dans les données intégrées de la carte Web. Pour utiliser le générateur, vous devez faire appel à un service d’entités. Pour utiliser votre couche de données réelle, vous devez utiliser la version téléchargeable de Map Tour.",
				appSave: "Erreur d’enregistrement de l’application Web",
				mapSave: "Erreur d’enregistrement de la carte Web",
				featureServiceLoad: "Error loading feature service",
				notAuthorized: "Vous n’êtes pas autorisé à configurer cette application",
				oldBrowserTitle: "Le navigateur n’est pas entièrement pris en charge",
				noBuilderIE8: "The Map Tour builder is not supported on Internet Explorer before version 9.",
				ie10Win7Explain: "Le générateur Map Tour n’est pas pris en charge dans Internet Explorer 10 sur Windows 7. Vous devez <a target='_blank' href='http://msdn.microsoft.com/en-us/library/ie/hh920756(v=vs.85).aspx'>définir manuellement le mode de document sur les normes d’Internet Explorer 9</a>, <a target='_blank' href='http://news.softpedia.com/news/How-to-Remove-IE10-and-Get-Back-to-IE9-on-Windows-7-308998.shtml'>utiliser Internet Explore 9</a> ou passer à Windows 8.",
				oldBrowserExplain: "Ce navigateur ne prend pas en charge la génération automatique des miniatures à partir d’images que vous ajoutez dans votre visite cartographique. Vous pouvez créer une visite cartographique avec ce navigateur, mais vous devez fournir une image miniature distincte pour chacune des images que vous ajoutez.",
				oldBrowserExplain2: "Pour profiter pleinement de l’application, <a href='http://browsehappy.com/' target='_blank'>mettez votre navigateur à niveau</a> ou <a href='http://www.google.com/chromeframe/?redirect=true' target='_blank'>activez Google Chrome Frame pour Internet Explorer</a>.",
				oldBrowserClose: "Fermer"
			},
			mobileHTML: {
				showIntro: "AFFICHER L’INTRO",
				hideIntro: "MASQUER L’INTRO",
				navList: "Liste",
				navMap: "Carte",
				navInfo: "Infos"
			},
			desktopHTML: {
				storymapsText: "Carte de narration",
				builderButton: "Mode de générateur"
			},
			builderHTML: {
				panelHeader: "CONFIGURATION DE L’APPLICATION",
				buttonSave: "ENREGISTRER",
				buttonDiscard: "ANNULER",
				buttonSettings: "Paramètres",
				buttonView: "Mode d’affichage",
				buttonOrganize: "Organiser",
				buttonAdd: "Ajouter",
				modalCancel: "Annuler",
				modalApply: "Appliquer",
				organizeHeader: "Organiser la visite",
				organizeGeneralCaption: "Déplacez les points de la visite pour les trier",
				organizeDelete: "Effacer",
				organizeHide: "Masquer",
				addMaxPointReached: "Vous avez atteint le nombre maximal de points autorisés par les icônes définies et il est impossible d’en ajouter un autre.<br /><br />Notez que si vous supprimez des points existants, vous devrez recharger l’application.",
				addMaxPointReachedMobile: "Vous avez atteint le nombre maximal de points autorisés et cette image ne peut pas être ajoutée.",
				addClose: "Fermer",
				addHeader: "Ajouter un nouveau point à la visite",
				addTabPicture: "Image",
				addTabInformation: "Informations",
				addTabLocation: "Emplacement",
				addSelectCaption: "Sélectionner ou supprimer une image",
				addSelectCaptionNoFileReader: "Sélectionner une image",
				addChangePhoto: "Modifier l’image et la miniature",
				addPictureResolutionIntro: "La résolution de l’image est trop élevée :",
				addPictureResolutionOldBrowser: "La résolution de l’image est trop élevée. Optimisez l’utilisation de Map Tour en spécifiant une résolution inférieure à %RECOMMENDED_RES%.",
				addPictureResolutionResize: "Définir la résolution de l’image sur %RESOLUTION%",
				addPictureResolutionKeep: "Conserver la résolution d’origine %RESOLUTION%",
				addSelectThumbnail: "Sélectionner la miniature",
				addNoThumbSelected: "Aucune miniature sélectionnée",
				addThumbSelected: "Sélectionné(e)",
				addCameraSettingsHeader: "PARAMETRES DE CAMERA",
				addThumbnailHeader: "MINIATURE",
				addLabelName: "Nom",
				addLabelDescription: "Légende",
				addTextPlaceholder: "Entrez des données",
				addLocatePlaceholder: "Rechercher une adresse ou un lieu",
				addPinColor: "Couleur",
				addLatitude: "Latitude",
				addLongitude: "Longitude",
				addLatitudePlaceholder: "par ex. 34.056",
				addLongitudePlaceholder: "par ex. -117.195",
				addUploading: "Chargement d’un point dans la visite",
				addSave: "Ajouter un point à la visite",
				addMobileUploading: "Chargement de l’image",
				addMobileName: "Entrer un nom",
				addMobileNameMandatory: "Erreur : entrez un nom.",
				addMobileError: "Une erreur s’est produite.",
				settingsHeader: "Paramètres de l’application",
				settingsTabLayout: "Mise en page",
				settingsTabColor: "Couleurs",
				settingsTabLogo: "En-tête",
				settingsTabFields: "Données",
				settingsTabExtent: "Etendue",
				settingsTabZoom: "Niveau de zoom",
				settingsLayoutExplain: "Sélectionnez une des deux mises en page d’application proposées.",
				settingsLayoutProfessional: "Mise en page à trois volets",
				settingsLayoutModern: "Mise en page intégrée",
				settingsLayoutSelected: "Mise en page sélectionnée",
				settingsLayoutSelect: "Sélectionner cette mise en page",
				settingsColorExplain: "Modifiez l’apparence en choisissant un thème prédéfini ou créez le vôtre.",
				settingsLabelColor: "Couleurs d’en-tête, de contenu et de pied de page",
				settingsLogoExplain: "Personnalisez le logo d’en-tête (250 x 50 px au maximum).",
				settingsLogoEsri: "Logo Esri",
				settingsLogoNone: "Aucun logo",
				settingsLogoCustom: "Logo personnalisé",
				settingsLogoCustomPlaceholder: "URL de l’image",
				settingsLogoCustomTargetPlaceholder: "Lien",
				settingsLogoSocialExplain: "Personnalisez le lien d’en-tête en haut à droite.",
				settingsLogoSocialText: "Texte",
				settingsLogoSocialLink: "Lien",
				settingsDataFieldsExplain: "Sélectionnez les champs du nom de la photo, de la légende et des couleurs.",
				settingsDataFieldsError: "L’application ne peut pas déterminer le nom, la légende ou les couleurs appropriés. Sélectionnez les champs à utiliser ici. Ces paramètres peuvent être modifiés ultérieurement.",
				settingsFieldsLabelName: "Nom",
				settingsFieldsLabelDescription: "Légende",
				settingsFieldsLabelColor: "Couleur",
				settingsExtentExplain: "Définissez l’étendue initiale de Map Tour au moyen de la carte interactive ci-dessous.",
				settingsExtentExplainBottom: "Cette étendue est utilisée uniquement si elle inclut le premier point de la visite. La valeur est conservée dans toute l’étendue initiale de la carte Web.",
				settingsExtentDrawBtn: "Tracer une nouvelle étendue",
				settingsExtentModifyBtn: "Modifier l’étendue actuelle",
				settingsExtentApplyBtn: "Appliquer à la carte principale",
				settingsZoomExplain: "Définissez le zoom des points de narration qui suivent l’introduction (facultatif).",
				settingsLabelZoom: "Echelle/niveau",
				settingsZoomFirstValue: "Aucune",
				settingsFieldError : "Sélectionnez un champ dans chaque liste",
				dataHeader: "Données de l’application",
				dataExplain: "Votre carte Web ne contient pas de service d’entités. Renseignez cette boîte de dialogue pour créer un service d’entités hébergé au sein de votre compte d’organisation ArcGIS.com. Le service d’entités sera ajouté à votre carte Web et partagé publiquement, mais vous seul disposerez des privilèges d’ajout/de mise à jour et de suppression.<br /><br />L’application n’est visible qu’à vous seul tant que vous ne l’avez pas partagée. <strong>Une fois votre visite cartographique prête, partagez-la via la page de l’élément.</strong>",
				dataNameLbl: "Nom du service",
				dataFolderListLbl: "Dossier",
				dataFolderListFetching: "Extraction des dossiers...",
				dataRootFolder: "Racine",
				dataNameError: "Attribuez un nom au service d’entités",
				dataFolderError: "Sélectionnez un dossier valide",
				dataSrcContainsInvalidChar: "Le nom du service d’entités contient un ou plusieurs caractères non valides (<, >, #, %, :, \", ?, &, +, / ou \).",
				dataSrvAlreadyExistsError: "Un service de ce nom existe déjà au sein de l’organisation. Choisissez un autre nom.",
				dataBtnClose: "Annuler la visite",
				dataBtnSave: "Créer le service",
				dataFooterProgress: "Création en cours",
				dataFooterSucceed: "Création réussie. Chargement en cours",
				dataFooterError: "La création du service a échoué. Réessayez",
				tabError: "Recherchez des erreurs dans tous les onglets",
				introRecordBtn: "Introduction",
				introRecordActivate: "Utilisez le premier point en introduction"
			},
			addPopupJS: {
				uploadingPicture: "Chargement de l’image",
				uploadSuccess: "Chargement réussi",
				uploadError: "Erreur de chargement de l’image",
				notJpg: "Choisissez une photo jpeg à charger",
				errorNoPhoto: "Choisissez une image à charger",
				errorNoThumbnail: "Choisissez une miniature à charger",
				errorNoName: "Attribuez un nom à ce point de la visite",
				errorNoDescription: "Attribuez une légende à ce point de la visite",
				errorNoLocation: "Définissez un emplacement pour ce point de la visite"
			},
			builderJS: {
				noPendingChange: "Aucune modification en attente",
				unSavedChangeSingular: "1 modification non enregistrée",
				unSavedChangePlural: "modifications non enregistrées",
				popoverDiscard: "Voulez-vous vraiment ignorer les modifications non enregistrées ?",
				yes: "Oui",
				no: "Non",
				popoverLoseSave: "En ouvrant la visionneuse, vous perdez les modifications non enregistrées",
				ok: "OK",
				popoverSaveWhenDone: "N’oubliez pas d’enregistrer lorsque vous avez terminé",
				closeWithPendingChange: "Voulez-vous vraiment confirmer l’opération ? Vos modifications seront perdues.",
				gotIt: "OK",
				savingApplication: "Enregistrement de l’application",
				saveSuccess: "L’application a été enregistrée",
				saveError: "L’enregistrement a échoué, réessayez",
				dragColorPicker: "Me déplacer<br />ou modifier ma couleur",
				dataWarningExtent: "Des données se trouvent à l’extérieur de l’étendue de la carte Web. Ces données ne seront pas utilisées comme points de la visite. Modifiez l’étendue de la carte si vous souhaitez les utiliser.",
				dataWarningVisibi: "Votre couche Map Tour n’est pas visible dans l’étendue actuelle de la carte Web. Rendez votre couche Map Tour visible avec une carte de taille %MAPSIZE%.",
				dataWarningEdit: "Modifier la carte Web",
				dataWarningClose: "Fermer",
				signIn: "Connectez-vous avec un compte sur",
				signInTwo: "pour enregistrer l’application."
			},
			organizePopupJS: {
				messageStart: "Vous avez choisi de supprimer",
				messageSinglePoint: "un point de la visite",
				messageMultiPoint: "des points de la visite",
				messagePermantRemove: "Cette opération supprime définitivement",
				messageRecord: "l’enregistrement",
				messageRecordPlural: "les enregistrements",
				messageConfirm: "de votre base de données. Voulez-vous continuer ?",
				labelButtonShow: "Afficher",
				labelButtonHide: "Masquer"
			},
			picturePanelJS: {
				popoverDeleteWarningPicAndThumb: "This will permanently delete the picture and thumbnail",
				popoverDeleteWarningThumb: "This will permanently delete the thumbnail",
				popoverUploadingPhoto: "Chargement de l’image et de la miniature",
				popoverUploadingThumbnail: "Chargement de la miniature",
				popoverUploadSuccessful: "Chargement réussi",
				popoverUploadError: "Le chargement a échoué, réessayez",
				changePicAndThumb: "Modifier l’image",
				changeThumb: "Modifier la miniature",
				selectPic: "Modifier l’image",
				selectThumb: "Sélectionner la miniature",
				uploadPicAndThumb: "Appliquer"
			},
			headerJS:{
				editMe: "Modifier",
				templateTitle: "Définir le titre du modèle",
				templateSubtitle: "Définir le sous-titre du modèle"
			},
			crossFaderJS:{
				setPicture: "Définir le titre de l’image",
				setCaption: "Définir la légende de l’image"
			}
        }
    })
);
