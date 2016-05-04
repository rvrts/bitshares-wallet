module.exports = {

languages: {

	sq: 'Albanian; sq (Gjuha Shqipe)',
	ar: 'Arabic;  (العربية)',
	bs: 'Bosnian;  (Bosanski Jezik)',
	bg: 'Bulgarian; bg (български език)',
	zh: 'Chinese, Simplified/Mandarin; zh (中文)',
	hr: 'Croatian; hr (Hrvatski Jezik)',
	en: 'English; en (English)',
	fi: 'Finnish; fi (Suomi)',
	fr: 'French; fr (Français)',
	de: 'German; de (Deutsch)',
	el: 'Greek; el (ελληνικά)',
	hi: 'Hindi; hi (हिन्दी, हिंदी) ',
	hu: 'Hungarian; hu (Magyar)',
	it: 'Italian; it (Italiano)',
	ja: 'Japanese; ja (日本語)',
	pl: 'Polish; pl (Język Polski)',
	ro: 'Romanian; ro (Română)',
	ru: 'Russian; ru (Русский)',
	sr: 'Serbian; sr (Cрпски Jезик (Srpski))',
	sk: 'Slovak; sk (Slovenčina)',
	es: 'Spanish; es (Español)',
	tr: 'Turkish; tr (Türkçe)'
 },
 

  wallet: {

    switch_language: 'Switch Language: ',
    // additional
    existing_password: "Existing PIN",
    verify: "Verify",
    enter_password: "Enter PIN",
    reset: "Reset",
    //change_password: "Change PIN",
    accept: "Accept",
    transaction_sent: "sent",
    transaction_to: "To",
    transaction_op: "All",
    transaction_info: "Info",
    transaction_date: "Date",
    transaction_fee: "Fee",
    transaction_from: "From",
    transaction_amount: "Amount",
    was_reg_account: "registered by",
    fraudAttemptMessage: 'Fraud Attempt! (on 3 consecutive incorrect PINs)',     //duplicate
    sync_block: "Block #",
    transfer_available: 'is available',
    //settings_hideDonations : 'Hide Donations from homescreen Transactions list',  // replaced with wallet.home.hideDonations
    account_name : 'Account name',
    account_name_is_taken: 'Account name is already taken',
    account_not_found: 'Account_not_found',
    enter_valid_account_name : "Please enter valid account name",
    account_premium_name_warn: "This is a premium name. Premium names are more expensive and can't be registered for free by faucet. Try to select another name containing at least one dash, number or no vowels.",
    done: 'Done',
    no_funds: 'No funds',
    account_not_yours: 'Account not yours',
    donation_fee_text: ' (network + 2 BTS donation)',
    account_errors_unknown : 'Unknown account',
    confirm: 'Confirm',
    success_exclaim: 'Success!',
    account_errors_invalid : 'Invalid account',
    account_more : 'More',
    brainkey_backup : 'Backup brainkey',
    wallet_brainkey: 'Wallet brainkey',
    close: 'Close',
    verified: 'verified',
    wallet_created: "Wallet Created",
    import_bts1: "Import from Brainkey",
	import_backup: "Import Backup",
	wallet_name :   "Wallet Name",
	contactDeleteConfirm: 'Are you SURE you want to permanently DELETE this Contact?',
	contactFriendlyName: 'Friendly name',
	contactNotes: 'Notes',
	save: 'Save',
	add: 'Add',
	ok: 'Ok',
	to_slash_from: 'To/From',
	unlock: 'Unlock',
	tran_confirm: 'Confirm transaction',
	email: 'E-mail',
	contact_email_hint : 'To display a photo for this Contact, enter its Gravatar e-mail here',
	contact_does_exist : 'Contact with this name already exists',
	unlock_wallet : 'Unlock Wallet',
	six_digits_pin : '6-digits PIN',
	six_digits_pin_confirm : '6-digits PIN confirm',	
	clipboard: 'Clipboard',
	out_of_balance: 'Insufficient balance',
	create_wallet: "Create Wallet",
	brainkey_imcompatible_ln1: "This BrainKey is not compatible with BTS 1.0",
	brainkey_imcompatible_ln2: "(Use a backup file instead)",
    brainkey: "Brainkey",
	custom_brainkey: "Custom brainkey",
	choose_backup: "Choose backup",
    invalid_format: "Invalid Format",
	to_accept_agreement:  "To accept the agreement",
	agreement: "Agreement",
	acnt_createRegisterOrImport: "ACCOUNT CREATE/REGISTER OR IMPORT",
	create: "Create",
	existing_account: "Existing account",
    create_backup: "Create Backup", // create_backup, reset(-), download, createBackupPrompt - are moved from .backup section
    download: "Download",
    createBackupPrompt: 'Please make backup of your wallet to continue',
	requirePinToOpen: 'Require PIN to open wallet',

 home: {
balances: "BILANSI",
contacts: "KONTAKTI",
finder: "FINDER",
exchange: "RAZMJENA",
receive: "PRIMAJU",
send: "POŠALJI",
balances: "salda",
transactions: "transakcije",
date: "datum",
all: "sve",
sent: "poslao",
recd: "Rec'd",
to: "do",
from: "iz",
amount: "iznos",
asset: "Asset",
name: "ime",
account: "račun",
memo: "memorandum",
donateToDevs: "Donirati 2 BTS na podršku Developers u BitShares Munich",
hideDonations: "Sakriti Donacije iz liste početnog zaslona Transakcije",
requestSpecificAmount: "Zatražite određeni iznos (opcionalno)",
sharePaymentRequest: "Objavi ovo plaćanje Upit",
inviteFriend: "Pozovite prijatelja",
buyLifetimeAnnual: "Kupiti Lifetime ili Godišnja pretplata",
continue: "nastaviti",
buy: "kupiti",
sell: "prodati",
cancel: "otkazati",
back: "natrag",
none: "nijedan",
please_wait: "Molimo pričekajte",
thank_you: "Hvala",
balance: "ravnoteža",
publicKey: "Public Key",
privateKey: "privatnog ključa",
yes: "da",
no: "nijedan",
remaining_balance: "preostali iznos",
excess_amount: "Ne možete slati iznos više od iznosa za naplatu",
backup_asset: "backup imovine",
reward_points : "nagradnih bodova"


}, settings: {
bitsharesWalletSettings: "BitShares Wallet Postavke",
taxableCountry: "Oporezivi Country",
preferredLanguage: "Željeni jezik",
displayDtAs: "Prikaz datuma i vremena kao",
getPricesFrom: "Get cijene od",
additionalSettings: "Dodatna podešavanja",
checkUpdatesStartup: "Check for updates na pokretanju",
autoInstallMajorVer: "Automatsko instaliranje glavna verzija za javnost",
requirePinToSend: "Zahtijevaju PIN Pošalji sredstava",
autoCloseWalletAfterInactivity: "Automatski blizu BitShares novčanik nakon 3 minute neaktivnosti",
searchTransactions: "Pretraga Transakcije",
exportTransactionsTo: "Izvoz transakcija :",
alwaysDonateDevsMunich: "Uvijek donirati 2 BTS na podršku Developers na BitShares Minhenu (bitshares-munich)",
allowUse_GpsToFind: "Pustite da se Finder (v2.0) da koristi GPS za pronalaženje najbližeg bankomata, Ljudi i POS sisteme sa Smartcoins",
allowReportPosition : "Pustite da se Finder (v2.0) da prijave svoj položaj tako da i drugi mogu kupiti ili prodati Smartcoins s vama",
pinNumber: "PIN broj",
createEditPin: "Kreiranje ili Uredite 6 cifara PIN da osiguraju svoje zlato i računima",
editPin: "Uređivati ​​svoje 6-cifara PIN da osiguraju svoje zlato i računima",
secureWithPin: "Secure čitav moj BitShares Novčanik s ovim PIN",
pinFraudNote: "Napomena: Ako je pogrešan PIN je upisano 3 puta, onda BitShares Novčanik će se zatvoriti i ne može se otključati za 15 minuta.",
backup: "Backup",
promprtForMonthlyBackup: "Prompt za mjesečno Backup",
createEditSeed: "Kreiranje ili Uredite Master Seed (12 riječ mozak novčanik)",
editSeed: "Uređivati ​​svoje Master Seed (12 riječ mozak novčanik)",
coldStorageSpending: "Cold Storage potrošnje",
importPrivateKey: "Uvezite privatni ključ i sredstva iz papira QR kod ili ostavu.",
qa: "Q & A",
q_sharePublicAddress: "P: Kako da podijelim svoje BTS adresa javnosti sa nekim?",
a_sharePublicAddress: "A: Na početnom zaslonu, dodirnite na QR koda, ili dodirnite i držite na BTS ... adresu.",
q_accessPrivateKeys: "P: Kako da pristupim privatnih ključeva?",
a_accessPrivateKeys: "A: Na početnom ekranu, dodirnite i držite na račun identicon korisnik koji se pojavljuje na lijevo od naziva korisnički račun.",
q_switchAccount : "P: Kako da se prebacili na drugi račun na početnom zaslonu?",
a_switchAccount : "A: Kliknite na malu crnu strelicu koja se pojavljuje na desno od naziva korisnički račun.",
q_searchTransaction: "P: Kako da tražiti određenu transakciju?",
a_searchTransaction: "A: Kliknite na zaglavlje stupca za sortiranje po toj rubrici (uzlaznom ili silaznom). A polje za pretraživanje će uskoro biti dodan.",
about: "Oko",
bitsharesMunichDonationRequest: "BitShares München donosi Smartcoin tehnologije i usluga investitorima i privrednicima diljem svijeta. Molimo vas da razmislite o donaciji na BitShares Novčanik projekta tako da Programeri mogu priuštiti da ovo novčanik sigurne, bug besplatno i stalno poboljšanje. Hvala!",

privacy: "privatnost",
tcTitle: "Uvjeti poslovanja",
cancelAndExit: "Odustani i Exit",
iAgree: "Slažem se",
confirmSendAmount: "Jeste li sigurni da želite poslati NN XX",
confirmSendAmountRecipient: "do yy?",
continue: "nastaviti",
cancel: "otkazati",

}, dialog: {
enterPin: "Unesite PIN",
incorrectPin: "pogrešan PIN",
protectPinMessage: "Molimo vas da Zaštitite svoj ​​PIN kod",
fraudAttemptMessage: "Pokušaj prevare ! ( na 3 uzastopna pogrešna PIN )",
},

exchange: {
    price: "Kurs",
    trade_currency: "Trade valuta",
    trade : "Trade",
    trade_msg: "Nemaš sredstava koji trgovac želi. Da li da se jedan?"
},

trade_warn_msg:{
	select_backup_asset: "Back up imovina nije izabran u postavkama. Molimo odaberite prvi",
	low_balance_backup_asset: "Nemaš dovoljno ravnotežu u trgovini. Molimo odaberite drugi backup imovine",
	other_backup_asset: "Kurs nije dostupan. Molimo odaberite drugi backup imovine",
	cannot_pay: "Ne možete platiti. Imate nizak ravnotežu"
},



  }
};