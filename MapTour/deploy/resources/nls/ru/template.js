﻿define(
({
		viewer: {
			loading: {
				step1: "ЗАГРУЗКА ПРИЛОЖЕНИЯ",
				step2: "ЗАГРУЗКА ДАННЫХ",
				step3: "ИНИЦИАЛИЗАЦИЯ ОБЗОРА",
				fail: "Загрузка обзора карты не удалась",
				failButton: "Повторить"
			},
			errors: {
				boxTitle: "Произошла ошибка",
				invalidConfig: "Критическая ошибка: недопустимая конфигурация",
				invalidConfigOwner: "Критическая ошибка: недопустимая конфигурация (требуется авторизованный владелец)",
				invalidConfigNoWebmap: "Критическая ошибка: недопустимая конфигурация (требуется авторизованный владелец и веб-карта)",
				createMap: "Не удалось создать карту",
				invalidApp: "Критическая ошибка: не удается загрузить приложение",
				noLayer: "Веб-карта не содержит слой данных для обзора карты.",
				noLayerNoHostedFS: "Веб-карта не содержит допустимый слой данных для Map Tour и у вас нет необходимых прав для создания сервиса объектов.",
				noLayerMobile: "Добро пожаловать в веб-приложение Map Tour. Приложение не настроено. Компоновщик Map Tour не поддерживается на мобильных устройствах.",
				noLayerView: "Добро пожаловать в веб-приложение Map Tour.<br />Приложение еще не настроено.",
				noBuilderWebmapData: "Компоновщик Map Tour не поддерживается во встроенных данных веб-карты. Чтобы использовать его, необходимо задействовать сервис объектов. Чтобы использовать слой фактических данных, следует воспользоваться загружаемой версией Map Tour.",
				appSave: "Ошибка при сохранении веб-приложения",
				mapSave: "Ошибка при сохранении веб-карты",
				featureServiceLoad: "Error loading feature service",
				notAuthorized: "Вы не авторизованы для настройки данного приложения",
				oldBrowserTitle: "Браузер поддерживается не полностью",
				noBuilderIE8: "The Map Tour builder is not supported on Internet Explorer before version 9.",
				ie10Win7Explain: "Компоновщик Map Tour не поддерживается в Internet Explorer 10 на Windows 7. Необходимо <a target='_blank' href='http://msdn.microsoft.com/en-us/library/ie/hh920756(v=vs.85).aspx'>вручную привести режим документа к стандартам Internet Explorer 9</a>, <a target='_blank' href='http://news.softpedia.com/news/How-to-Remove-IE10-and-Get-Back-to-IE9-on-Windows-7-308998.shtml'>downgrade to Internet Explore 9</a> или обновите ОС до Windows 8.",
				oldBrowserExplain: "Этот браузер не поддерживает автоматическое создание эскизов из изображений, которые вы загрузили в обзор карты. Можно создать обзор карты с помощью этого браузера, но вам придется задать отдельный эскиз для каждого из загруженных изображений.",
				oldBrowserExplain2: "Для достижения наилучшего результата <a href='http://browsehappy.com/' target='_blank'>обновите браузер</a> или <a href='http://www.google.com/chromeframe/?redirect=true' target='_blank'>активируйте Google Chrome Frame для Internet Explorer</a>.",
				oldBrowserClose: "Закрыть"
			},
			mobileHTML: {
				showIntro: "ПОКАЗАТЬ ЗАСТАВКУ",
				hideIntro: "СКРЫТЬ ЗАСТАВКУ",
				navList: "Список",
				navMap: "Карта",
				navInfo: "Информация"
			},
			desktopHTML: {
				storymapsText: "Карта истории",
				builderButton: "Переключиться в режим компоновки"
			},
			builderHTML: {
				panelHeader: "КОНФИГУРАЦИЯ ПРИЛОЖЕНИЯ",
				buttonSave: "СОХРАНИТЬ",
				buttonDiscard: "ОТМЕНА",
				buttonSettings: "Настройки",
				buttonView: "Режим просмотра",
				buttonOrganize: "Организовать",
				buttonAdd: "Добавить",
				modalCancel: "Отмена",
				modalApply: "Применить",
				organizeHeader: "Организовать обзор",
				organizeGeneralCaption: "Используйте перетаскивание для сортировки точек обзора",
				organizeDelete: "Удалить",
				organizeHide: "Скрыть",
				addMaxPointReached: "Вы достигли максимального числа точек, разрешенного набором значков, и не можете добавить еще одну точку обзора.<br /><br />Обратите внимание, что если удалить существующие точки, приложение придется перезагрузить.",
				addMaxPointReachedMobile: "Вы достигли максимального количества авторизованных точек и не можете добавить это изображение.",
				addClose: "Закрыть",
				addHeader: "Добавить новую точку обзора",
				addTabPicture: "Изображение",
				addTabInformation: "Информация",
				addTabLocation: "Местоположение",
				addSelectCaption: "Выберите или перетащите изображение",
				addSelectCaptionNoFileReader: "Выберите изображение",
				addChangePhoto: "Изменить изображение и эскиз",
				addPictureResolutionIntro: "Разрешение изображения выше необходимого:",
				addPictureResolutionOldBrowser: "Разрешение изображения выше необходимого. Оптимизируйте Map Tour, задав разрешение ниже, чем %RECOMMENDED_RES%.",
				addPictureResolutionResize: "Изменить разрешение изображения на %RESOLUTION%",
				addPictureResolutionKeep: "Сохранить исходное разрешение %RESOLUTION%",
				addSelectThumbnail: "Выберите значок",
				addNoThumbSelected: "Значок не выбран",
				addThumbSelected: "Выбрано",
				addCameraSettingsHeader: "НАСТРОЙКИ КАМЕРЫ",
				addThumbnailHeader: "ЗНАЧОК",
				addLabelName: "Имя",
				addLabelDescription: "Заголовок",
				addTextPlaceholder: "Введите что-нибудь",
				addLocatePlaceholder: "Найдите адрес или место",
				addPinColor: "Градуированные цвета",
				addLatitude: "Широта",
				addLongitude: "Долгота",
				addLatitudePlaceholder: "например, 34.056",
				addLongitudePlaceholder: "например, -117.195",
				addUploading: "Загрузка точки обзора",
				addSave: "Добавить точку обзора",
				addMobileUploading: "Загрузка изображения",
				addMobileName: "Введите имя",
				addMobileNameMandatory: "Ошибка, пожалуйста, введите имя.",
				addMobileError: "Извините, что-то пошло не так",
				settingsHeader: "Настройки приложения",
				settingsTabLayout: "Компоновка",
				settingsTabColor: "Цвета",
				settingsTabLogo: "Заголовок",
				settingsTabFields: "Данные",
				settingsTabExtent: "Экстент",
				settingsTabZoom: "Уровень масштабирования",
				settingsLayoutExplain: "Выберите одну из двух компоновок приложения.",
				settingsLayoutProfessional: "Трехпанельная компоновка",
				settingsLayoutModern: "Интегрированная компоновка",
				settingsLayoutSelected: "Выбранная компоновка",
				settingsLayoutSelect: "Выбрать эту компоновку",
				settingsColorExplain: "Измените внешний вид, выбрав готовую тему или создав свою собственную.",
				settingsLabelColor: "Цвета колонтитулов и содержания",
				settingsLogoExplain: "Настройка логотипа заголовка (максимум 250 x 50px).",
				settingsLogoEsri: "Логотип Esri",
				settingsLogoNone: "Без логотипа",
				settingsLogoCustom: "Собственный логотип",
				settingsLogoCustomPlaceholder: "URL-адрес изображения",
				settingsLogoCustomTargetPlaceholder: "Переход по ссылке",
				settingsLogoSocialExplain: "Настроить верхнюю правую ссылку заголовка.",
				settingsLogoSocialText: "Текст",
				settingsLogoSocialLink: "Ссылка",
				settingsDataFieldsExplain: "Выберите поля имени, заголовка и цвета фотографии.",
				settingsDataFieldsError: "Приложение не может определить соответствующие данные имени, заголовка или цвета. Выберите поля, которые будут здесь использоваться. Позже эти параметры можно будет изменить.",
				settingsFieldsLabelName: "Имя",
				settingsFieldsLabelDescription: "Заголовок",
				settingsFieldsLabelColor: "Градуированные цвета",
				settingsExtentExplain: "Выберите начальный экстент Map Tour через интерактивную карту, показанную ниже.",
				settingsExtentExplainBottom: "Этот экстент используется только если он содержит первую точку обзора. Значение сохраняется через начальный экстент веб-карты.",
				settingsExtentDrawBtn: "Нарисовать новый экстент",
				settingsExtentModifyBtn: "Изменить текущий экстент",
				settingsExtentApplyBtn: "Применить на главной карте",
				settingsZoomExplain: "Установить масштаб для точек истории после введения (необязательно).",
				settingsLabelZoom: "Масштаб/уровень",
				settingsZoomFirstValue: "Нет",
				settingsFieldError : "Выберите поле в каждом списке",
				dataHeader: "Данные приложения",
				dataExplain: "Веб-карта не содержит сервис объектов. Заполните это диалоговое окно для создания сервиса объектов в учетной записи организации ArcGIS.com. Сервис объектов будет добавлен к веб-карте и получит публичный доступ, но только вы сможете добавлять/изменять или удалять права доступа.<br /><br />Приложение будет доступно только вам, пока вы не предоставите доступ другим пользователям. <strong>Когда Map Tour будет готов, предоставьте доступ к приложению с помощью страницы элемента.</strong>",
				dataNameLbl: "Имя сервиса",
				dataFolderListLbl: "Папка",
				dataFolderListFetching: "Извлечение папок ...",
				dataRootFolder: "Корень",
				dataNameError: "Введите имя сервиса объектов",
				dataFolderError: "Выберите допустимую папку",
				dataSrcContainsInvalidChar: "Имя сервиса объектов содержит один или несколько недопустимых символов (<, >, #, %, :, \", ?, &, +, / или \).",
				dataSrvAlreadyExistsError: "Сервис с таким именем уже существует в организации. Выберите другое имя.",
				dataBtnClose: "Отменить обзор",
				dataBtnSave: "Создать сервис",
				dataFooterProgress: "Создание в процессе",
				dataFooterSucceed: "Создание выполнено успешно. Загрузка",
				dataFooterError: "Создание не удалось. Попробуйте еще раз",
				tabError: "Проверьте все закладки на наличие ошибок",
				introRecordBtn: "Введение",
				introRecordActivate: "Использовать первую точку как введение"
			},
			addPopupJS: {
				uploadingPicture: "Загрузка изображения",
				uploadSuccess: "Загрузка выполнена успешно",
				uploadError: "Ошибка загрузки изображения",
				notJpg: "Выберите фотографию в формате jpeg для загрузки",
				errorNoPhoto: "Выберите изображение для загрузки",
				errorNoThumbnail: "Выберите значок для загрузки",
				errorNoName: "Введите имя для этой точки обзора",
				errorNoDescription: "Введите заголовок для этой точки обзора",
				errorNoLocation: "Введите местоположение для этой точки обзора"
			},
			builderJS: {
				noPendingChange: "Нет предполагаемых изменений",
				unSavedChangeSingular: "1 несохраненное изменение",
				unSavedChangePlural: "несохраненных изменений",
				popoverDiscard: "Вы действительно хотите отказаться от несохраненных изменений?",
				yes: "Да",
				no: "Нет",
				popoverLoseSave: "При открытии вьюера вы потеряете все несохраненные изменения",
				ok: "Ok",
				popoverSaveWhenDone: "Не забудьте сохранить изменения, когда закончите",
				closeWithPendingChange: "Вы действительно хотите подтвердить это действие? Все изменения будут потеряны.",
				gotIt: "Ok",
				savingApplication: "Сохранение приложения",
				saveSuccess: "Приложение успешно сохранено",
				saveError: "Сохранение не удалось, попробуйте еще раз",
				dragColorPicker: "Переместить меня<br />или изменить цвет",
				dataWarningExtent: "Имеются данные за пределами экстента веб-карты. Эти данные не будет использоваться как точки обзора, измените экстент карта, чтобы использовать их.",
				dataWarningVisibi: "Слой Map Tour не отображается при текущем экстенте веб-карты. Подтвердите, что слой Map Tour отображается на карте размера %MAPSIZE%.",
				dataWarningEdit: "Редактировать веб-карту",
				dataWarningClose: "Закрыть",
				signIn: "Войдите с помощью учетной записи в",
				signInTwo: "чтобы сохранить приложение."
			},
			organizePopupJS: {
				messageStart: "Вы выбрали удаление",
				messageSinglePoint: "одной точки обзора",
				messageMultiPoint: "точек обзора",
				messagePermantRemove: "Произойдет окончательное удаление",
				messageRecord: "записи",
				messageRecordPlural: "записей",
				messageConfirm: "из вашей базы данных. Вы хотите продолжить?",
				labelButtonShow: "Показать",
				labelButtonHide: "Скрыть"
			},
			picturePanelJS: {
				popoverDeleteWarningPicAndThumb: "This will permanently delete the picture and thumbnail",
				popoverDeleteWarningThumb: "This will permanently delete the thumbnail",
				popoverUploadingPhoto: "Загрузка изображения и значка",
				popoverUploadingThumbnail: "Загрузка значка",
				popoverUploadSuccessful: "Загрузка выполнена успешно",
				popoverUploadError: "Загрузка не удалась, попробуйте еще раз",
				changePicAndThumb: "Выберите изображение",
				changeThumb: "Изменить значок",
				selectPic: "Выберите изображение",
				selectThumb: "Изменить значок",
				uploadPicAndThumb: "Применить"
			},
			headerJS:{
				editMe: "Отредактируйте меня !",
				templateTitle: "Ввести заголовок шаблона",
				templateSubtitle: "Ввести подзаголовок шаблона"
			},
			crossFaderJS:{
				setPicture: "Ввести название изображения",
				setCaption: "Ввести заголовок изображения"
			}
        }
    })
);
