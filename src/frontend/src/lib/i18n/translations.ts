export const translations = {
  de: {
    nav: {
      about: 'Information',
      blog: 'Blog',
      contact: 'Kontakt',
      donation: 'Datenspende',
      faq: 'FAQ',
      team: 'Team',
      tutorial: 'Tutorial',
    },
    homepage: {
      emailCommunication: {
        title: 'Kommunikation mittels Email',
        description: 'Vor nunmehr 30 Jahren begann der Siegeszug der Email. Seitdem hat die Email-Kommunikation mehr und mehr Briefe ersetzt. Sprachlich unterscheiden sich Emails und Briefe in vielen Aspekten.'
      },
      dataSpende: {
        title: 'Datenspende',
        description: 'Um Emails zu analysieren, benötigen wir Emails als Korpus. Wir sind auf Ihre Email-Spenden angewiesen. Leisten Sie einen wertvollen Beitrag zur Forschung und helfen Sie, Email-Kommunikation besser zu verstehen!'
      },
      tutorial: {
        title: 'Tutorial',
        description: 'Lernen Sie, wie Sie an unserem Email-Forschungsprojekt teilnehmen können.'
      },
      blog: {
        title: 'Blog',
        description: 'Neueste Updates und Erkenntnisse aus unserer Forschung.'
      }
    },
    about: {
      title: 'Projektbeschreibung',
      projectDescription: 'Auch wenn die E-Mail nun schon seit Jahrzehnten als persönliches oder auch als professionelles Kommunikationsmittel benutzt wird, gibt es nur relativ wenige linguistische Arbeiten, die ihren Sprachgebrauch genauer analysieren. Ein wesentlicher Grund für die überschaubare Anzahl an umfassenden linguistischen Studien, liegt in der mangelnden Datenbasis. Um E-Mails analysieren zu können, benötigen wir E-Mails als Korpora. Anders als bei Briefen, von denen ein Teil bis heute in sehr verschiedenen kleinen oder großen Archiven aufbewahrt und dort zur Analyse genutzt werden können, haben wir für E-Mails keine Datenbanken, die uns ausreichend E-Mails zur Analyse zur Verfügung stellen könnten. Wir sind demzufolge auf E-Mail-Spenden angewiesen.',
      dataHandling: 'Mit den gespendeten E-Mails, die selbstverständlich von uns komplett pseudonymisiert werden, hätten wir die Möglichkeit, verschiedene linguistische Fragestellungen zu bearbeiten oder auch die Frage zu beantworten, ob und warum wir E-Mails anders schreiben als Briefe.',
      dataHandlingTitle: 'Umgang mit den Daten/Pseudonymisierung',
      donorNote: 'Hinweise an die Spendenden: Bitte spenden Sie ausschließlich E-Mails, die Sie selbst gesendet haben oder bei denen Sie die Zustimmung aller Beteiligten eingeholt haben.',
      pseudonymizationTitle: 'Pseudonymisierung der Mails',
      pseudonymizationText: 'Die E-Mails werden automatisch pseudonymisiert. Dazu nutzen wir ein entsprechendes Tool, welches wir im vergangenen Jahr an hunderten Test-E-Mails überprüft haben. Durch die Pseudonymisierung werden alle persönlichen Daten wie Namen, Telefonnummer oder Adressen aus dem E-Mails herausgestrichen und durch Platzhalter wie Name für Sabine Mustermann ersetzt.',
      numberAndTypeTitle: 'Anzahl und Art der E-Mails',
      numberAndTypeText: 'Es gibt keine Begrenzung. Sie können grundsätzlich so viele E-Mails spenden wie Sie möchten. Die E-Mails können gerne zu den unterschiedlichsten Anlässen und in unterschiedlichsten Situationen geschrieben worden sein.',
      donateButton: 'Emails spenden'
    },
    donation: {
      title: 'Datenspende',
      buttonText: 'Spenden Sie Ihre Emails für Forschungszwecke',
      modals: {
        formModal: {
          title: 'Metadaten',
          gender: 'Geschlecht',
          genderOptions: {
            m: 'm',
            f: 'f',
            d: 'd',
            noAnswer: 'Keine Angabe',
          },
          age: 'Altersschritte',
          ageOptions: {
            under20: '<20',
            '21-30': '21-30',
            '31-40': '31-40',
            '41-50': '41-50',
            '51-60': '51-60',
            over60: '>60',
            noAnswer: 'Keine Angabe',
          },
          nativeLanguage: 'Ist die Sprache, in der Sie schreiben, Ihre Muttersprache?',
          nativeLanguageOptions: {
            yes: 'Ja',
            no: 'Nein',
            noAnswer: 'Keine Angabe',
          },
          buttons: {
            next: 'Weiter',
            cancel: 'Abbrechen',
          },
        },
        countryModal: {
          title: 'Metadaten',
          label: 'Wo haben Sie die meisten Nachrichten verfasst?',
          selectedCountry: 'Ausgewähltes Land:',
          buttons: {
            next: 'Weiter',
            back: 'Zurück',
          },
        },
        forwardEmailModal: {
          title: 'Metadaten',
          emailLabel: 'Ihre Email Adresse von der Sie spenden:',
          revocationText: 'Falls Sie Ihre Spende zu einem späteren Zeitpunkt widerrufen möchten, nutzen Sie bitte die ID, die Sie in der Bestätigungsemail erhalten haben.',
          forwardingText: 'Um Ihre Emails zu spenden, leiten Sie diese bitte an folgende Adresse weiter:',
          donationEmail: 'mailcom-donation@rose.uni-heidelberg.de',
          buttons: {
            submit: 'Einreichen',
            next: 'Weiter',
            back: 'Zurück',
          },
        },
        disclosureModal: {
          title: 'Einwilligungserklärung',
          header: 'Information und Einwilligungserklärung zum wissenschaftlichen Forschungsvorhaben "Schreiben nach der Briefkultur: MailCom"',
          informationTitle: 'Information zum wissenschaftlichen Forschungsvorhaben',
          informationText: 'Liebe*r Teilnehmer*in des wissenschaftlichen Forschungsvorhabens, wir möchten Sie um Ihre Einwilligung zur Teilnahme an dem wissenschaftlichen Forschungsvorhaben MailCom und der damit verbundenen Verarbeitung Ihrer personenbezogenen Daten bitten (siehe Formular weiter hinten). Ihre Einwilligung können Sie zu jedem Zeitpunkt widerrufen.',
          whatIsItTitle: 'Worum geht es in diesem wissenschaftliche Forschungsvorhaben?',
          whatIsItText: 'Seit über 50 Jahren wird die E-Mail als persönliches und professionelles Kommunikationsmittel benutzt. Auf der Arbeit, unter Freunden, mit Behörden und in Vereinen werden E-Mails in vielen verschiedenen Situationen geschrieben und empfangen. In zahlreichen Bereichen hat die E-Mail den Brief als Kommunikationsform ersetzt. Ziel des Projektes MailCom, ist zu untersuchen, inwieweit sich der Sprachgebrauch in E-Mails im Unterschied zur über Jahrhunderte üblichen Briefkommunikation verändert hat. Das wissenschaftliche Forschungsvorhaben wird durchgeführt, um Standardisierungsaspekte von Text- bzw. Diskurstypen oder auch einzelnen sprachlichen Strukturen sprachwissenschaftlich zu analysieren. Die Forschungsgruppe wird vom Heidelberg Centre for Digital Humanities der Universität Heidelberg von 2024 bis 2025 gefördert.',
          procedureTitle: 'Wie ist der genaue Ablauf des wissenschaftlichen Forschungsvorhabens und wie sollen meine Daten verwendet werden?',
          procedureText: 'Ihre Teilnahme an diesem wissenschaftlichen Forschungsvorhaben wird die Zeit der E-Mail Spende und die Beantwortung eines ca. 2-minütigen Fragebogens umfassen.  Während dieses wissenschaftlichen Forschungsvorhabens werden Sie die Möglichkeit haben, eine von Ihnen ausgewählte Anzahl an E-Mails bzw. E-Mail-Verläufen zu spenden. In einem ersten Schritt werden Sie gebeten einen sehr kurzen Fragebogen zu Ihrer Situation als Schreiber auszufüllen. Die im Fragebogen erhobenen Informationen werden nicht auf Ihre Person zurückzuführen sein, sondern ausschließlich zusammen mit den bereits pseudonymisierten E-Mails gespeichert und für die sprachwissenschaftliche Analyse genutzt.  Der zweite Schritt ist die Datenspende selbst. Dabei leiten Sie die von Ihnen zur Spende ausgewählten E-Mails an eine extra eingerichtete Universitäts-E-Mail-Adresse der Universität Heidelberg weiter. Bitte spenden Sie uns keine E-Mails dritter Personen, ohne deren vorige Einwilligung eingeholt zu haben oder deren Inhalt Art. 9 oder 10 DSGVO Daten umfasst. Die von Ihnen gespendeten E-Mails werden bei Eintreffen auf unseren Universitätsservern umgehend und automatisiert pseudonymisiert. Die automatische Pseudonymisierung wird im Anschluss noch einmal überprüft. So stellen wir sicher, dass mögliche Fehler in der automatischen Pseudonymisierung korrigiert werden. Alle persönlichen Daten in den E-Mails (Namen, Adressen, Telefonnummern, Ortsbezeichnungen, Vereins- und Organisationsnamen) werden bei der Pseudonymisierung vor der Speicherung durch einen Platzhalter wie Max Mustermann im Falle von Namen und damit abstrahiert, wodurch sie als persönliche Informationen nicht mehr erkennbar sind. In einem dritten Schritt bekommen Sie von uns einen Pin-Code zugeschickt, der Ihrer Spende zugeordnet ist. Bewahren Sie diesen Code unbedingt auf. Im Falle einer von Ihnen gewünschten Löschung Ihrer Daten für das Forschungsvorhaben, ermöglicht uns einzig dieser Code auf die von Ihnen gespendeten und von uns pseudonymisierten Mails zuzugreifen.',
          costsTitle: 'Entstehen für mich Kosten durch die Teilnahme an dem wissenschaftlichen Forschungsvorhaben und wird eine Aufwandsentschädigung bezahlt?',
          costsText: 'Durch die Teilnahme an diesem wissenschaftlichen Forschungsvorhaben entstehen für Sie keine Kosten. Eine Aufwandsentschädigung für Ihre Teilnahme an dem wissenschaftlichen Forschungsvorhaben wird nicht gezahlt. Ansprüche auf andere Formen der Vergütung, Tantiemen oder sonstige Beteiligungen an finanziellen Vorteilen und Gewinnen, die möglicherweise auf der Basis der Forschungsergebnisse erzielt werden, sind ausgeschlossen.',
          withdrawalTitle: 'Wer entscheidet, ob ich aus dem wissenschaftlichen Forschungsvorhaben gegebenenfalls vorzeitig ausscheide?',
          withdrawalText: 'Die Teilnahme an diesem wissenschaftlichen Forschungsvorhaben ist freiwillig. Sie können jederzeit ohne Angabe von Gründen die Löschung Ihrer gespendeten E-Mails verlangen, ohne dass Ihnen dadurch Nachteile entstehen. Um die Löschung zu vollziehen, senden Sie uns den Pin-Code, den Sie am Ende Ihrer Spende erhalten haben in einer formlosen E-Mail an mailcom@rose.uni-heidelberg.de.',
          revocationTitle: 'Widerrufsbelehrung',
          revocationText: 'Sie können Ihre Einwilligung zur Datenspende jederzeit widerrufen. Ab dem Moment des Widerrufs verwenden wir Ihre Daten nicht mehr weiter. Um Ihr Widerrufsrecht in Anspruch zu nehmen, senden Sie uns eine E-Mail mit Ihrer Identifikationsnummer (diese erhalten Sie bei der Datenspende per E-Mail) und teilen Sie uns formlos, aber eindeutig mit, dass Sie widerrufen möchten. Ihre Daten werden ab dem Zeitpunkt Ihres Widerrufs nicht mehr für wissenschaftliche Zwecke oder Veröffentlichungen verwendet.',
          dataProtectionHeader: 'Datenschutzrechtliche Information: Was passiert mit meinen Daten?',
          dataCollectionTitle: 'Welche Daten werden in dem wissenschaftlichen Forschungsvorhaben erhoben?',
          dataCollectionIntro: 'Im Rahmen des wissenschaftlichen Forschungsvorhabens werden die folgenden Projektdaten von Ihnen erhoben:',
          dataCollectionItems: {
            emails: 'Die von Ihnen durch das Weiterleiten an die Spende-Adresse übermittelten E-Mails',
            questionnaire: 'Fragebogendaten zu Ihrer Person (Alter, Geschlecht, sprach-geographische Daten (Region der Abfassung der E-Mails))',
          },
          dataCollectionNote: 'Die Projektdaten können auch besondere Kategorien personenbezogener Daten beinhalten wie beispielsweise personenbezogene Daten aus denen politische Meinungen, religiöse oder weltanschauliche Überzeugungen oder die Gewerkschaftszugehörigkeit hervorgehen, Daten zum Sexualleben oder der sexuellen Orientierung.',
          dataProcessingTitle: 'Auf welche Art und Weise erfolgt die Datenverarbeitung in dem wissenschaftlichen Forschungsvorhaben?',
          dataProcessingText: 'Die produzierten Projektdaten, d.h. die E-Mails bzw. E-Mail-Verläufe und die Antworten auf den kurzen Fragebogen werden automatisch pseudonymisiert. Alle Angaben, die zu einer Identifizierung Ihrer Person führen könnten (z.B. Name, E-Mail-Adresse, Ortsbezeichnungen, Telefonnummern, Vereins- und Organisationsnamen) und sonstige Hinweise werden verändert und damit abstrahiert. Die Auswertung der Daten durch Projektmitarbeiter erfolgt erst im Anschluss an die Pseudoymisierung der Daten. In einzelnen Fällen können weitere Textpassagen von Mitarbeitern gelöscht oder teilweise verfremdet werden, um die Anonymität der Schreiber in allen Aspekten zu gewährleisten. In wissenschaftlichen Veröffentlichungen, wie in Publikationen oder auf Tagungen und Konferenzen, werden keine personenbezogenen Daten von Ihnen genannt, d.h. die Forschungsergebnisse werden ohne Bezug zu Ihrer Person veröffentlicht. Die pseudonymisierten E-Mails werden nur in Ausschnitten zitiert, um gegenüber Dritten sicherzustellen, dass der entstehende Gesamtzusammenhang von Ereignissen nicht zu einer Identifizierung Ihrer Person führen kann.',
          dataAccessTitle: 'Wer erhält Kenntnis von den Daten und welche Personen und Institutionen haben Zugang zu den Daten?',
          dataAccessText: 'Zugang zu Ihren gespendeten Emails und Daten haben nur Mitarbeiter*innen des wissenschaftlichen Forschungsvorhabens. Diese Personen sind auf Beachtung der datenschutzrechtlichen Anforderungen verpflichtet. Die Daten sind vor fremden Zugriffen geschützt.',
          rightsTitle: 'Welche Rechte stehen den von der Datenverarbeitung Betroffenen zu?',
          rightsIntro: 'Die Teilnahme an dem wissenschaftlichen Forschungsvorhaben ist freiwillig; sollten Sie nicht teilnehmen, entstehen Ihnen keine Nachteile. Sie haben jederzeit die Möglichkeit die folgenden Rechte geltend zu machen:',
          rightsItems: {
            information: 'Recht auf Auskunft über die von Ihnen verarbeiteten personenbezogenen Daten (Art. 15 DSGVO)',
            correction: 'Recht auf Berichtigung Sie betreffender unrichtiger personenbezogener Daten (Art. 16 DSGVO)',
            deletion: 'Recht auf Löschung Sie betreffender personenbezogener Daten (Art. 17 DSGVO)',
            restriction: 'Recht auf Einschränkung der Verarbeitung Sie betreffender personenbezogener Daten (Art. 18 DSGVO)',
            objection: 'Recht auf Widerspruch gegen die Verarbeitung Sie betreffender personenbezogener Daten (Art. 21 DSGVO)',
            complaint: 'Sie haben zudem das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung Ihrer personenbezogenen Daten durch uns zu beschweren (Art. 77 DSGVO)',
            revocation: 'Sofern Sie in die Verarbeitung Ihrer Daten eingewilligt haben, besteht die Möglichkeit diese jederzeit für die Zukunft zu widerrufen (Art. 7 Absatz 3 DSGVO). In diesem Fall müssen alle personenbezogenen Daten entweder gelöscht oder anonymisiert werden.',
          },
          rightsContact: 'Ihre Rechte sind grundsätzlich schriftlich bei dem zur Datenverarbeitung Verantwortlichen geltend zu machen. Richten Sie Ihren Widerruf bitte an die folgende E-Mail-Adresse: mailcom@rose.uni-heidelberg.de.',
          responsibilityTitle: 'Wer ist für das wissenschaftliche Forschungsvorhaben und der damit verbundenen Datenverarbeitung verantwortlich? An wen kann ich mich bei weiteren Fragen wenden?',
          responsibilityText: 'Das wissenschaftliche Forschungsvorhaben wird vom Romanischen Seminar der Universität Heidelberg, Seminarstr. 3, 69117 Heidelberg, durchgeführt. Für die Datenverarbeitung verantwortlich ist Prof. Dr. Sybille Große, Leiterin des Projekts MailCom, Universität Heidelberg. Für datenschutzrechtliche Fragen wenden Sie sich bitte an die*den Datenschutzbeauftragte*n bzw. die Stabsstelle Datenschutz der Universität Heidelberg, Seminarstraße 2, 69117 Heidelberg, datenschutz@uni-heidelberg.de.',
          dataProtectionTitle: 'Datenschutz',
          dataProtectionText: 'Mir ist bekannt, dass bei dieser Studie personenbezogene Daten verarbeitet werden sollen. Ich wurde darüber aufgeklärt und stimme freiwillig zu, dass meine in der Studie erhobenen Daten (Alter, Geschlecht, sprach-geographische Information) und Angaben zu meiner Person in pseudonymisierter Form ausgewertet werden können. Die Verarbeitung der Daten erfolgt nach gesetzlichen Bestimmungen und setzt gemäß Art. 6 Abs. 1 lit. a der Datenschutz-Grundverordnung folgende Einwilligungserklärung voraus: Ich wurde darüber aufgeklärt und stimme freiwillig zu, dass meine in der Studie erhobenen Daten, zu den in der Informationsschrift beschriebenen Zwecken in pseudonymisierter Form aufgezeichnet und ausgewertet werden können. Bei der Veröffentlichung von Ergebnissen der Studie wird mein Name ebenfalls nicht genannt. Die personenbezogenen Daten werden anonymisiert. Mir ist bekannt, dass diese Einwilligung jederzeit schriftlich ohne Angabe von Gründen widerrufen werden kann, ohne dass mir dadurch Nachteile entstehen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung wird davon nicht berührt. Es steht mir frei, die von mir erhobenen Daten löschen zu lassen, indem ich mein Löschbegehren richte an: mailcom@rose.uni-heidelberg.de.',
          checkboxText: 'Ich habe die Informationen zum Datenschutz und Widerruf gelesen und stimme der Aufzeichnung und Verarbeitung meiner Daten zu.',
          buttons: {
            accept: 'Ich akzeptiere und reiche meine Daten ein',
            reject: 'Ablehnen',
          },
        },
        alerts: {
          confirmRequired: 'Bitte bestätigen Sie die Einwilligungserklärung um fortzufahren.',
          rejected: 'Sie haben die Einwilligungserklärung abgelehnt. Ihre Daten werden nicht gespeichert.',
        },
      },
    },
    tutorial: {
      title: 'Tutorial',
      description: 'Lernen Sie Schritt für Schritt, wie Sie an unserem Email-Forschungsprojekt teilnehmen können. Hier finden Sie bald ein ausführliches Erklärvideo.'
    },
    blog: {
      title: 'Blog',
      description: 'Hier finden Sie aktuelle Neuigkeiten und Erkenntnisse aus unserem Email-Forschungsprojekt.'
    },
    contact: {
      title: 'Kontakt',
      description: 'Nehmen Sie Kontakt mit unserem Forschungsteam unter mailcom@rose.uni-heidelberg.de auf. Wir freuen uns auf Ihre Fragen und Anregungen.'
    },
    team: {
      title: 'Unser Team',
      description: 'Lernen Sie die Menschen hinter unserem Projekt kennen. Unser engagiertes Team arbeitet daran, Anonymisierung zugänglich und verständlich zu machen.'
    },
    faq: {
      title: 'Häufig gestellte Fragen',
      description: 'Hier finden Sie Antworten auf häufig gestellte Fragen zum Projekt.',
      questions: {
        q1: {
          question: 'Was habe ich davon, wenn ich meine E-Mails spende?',
          answer: 'Mit dem Spenden der E-Mails leisten Sie einen immensen Beitrag zur linguistischen Forschung! Ohne die E-Mailspenden hätte die Forschung keine Datenbasis, um sich ein realistisches Bild zum tatsächlichen Schreiben zu machen. Daher vielen Dank für Ihre Unterstützung!'
        },
        q2: {
          question: 'Wer kann Emails spenden?',
          answer: 'Alle Personen über 18 Jahre können ihre E-Mails spenden.'
        },
        q3: {
          question: 'Welche Art von Emails kann ich spenden? (informell, formell etc.)',
          answer: 'Mehr ist mehr: Sie können alles spenden, was Sie möchten! Bitte spenden Sie ausschließlich E-Mails, die Sie selbst gesendet haben oder bei denen Sie die Zustimmung aller Beteiligten eingeholt haben. Die E-Mails können gerne zu den unterschiedlichsten Anlässen geschrieben worden sein.'
        },
        q4: {
          question: 'Wie lange dauert die E-Mailspende ungefähr?',
          answer: 'Die Dauer hängt von der Anzahl der gespendeten E-Mails ab.'
        },
        q5: {
          question: 'Wie kann ich E-Mails spenden?',
          answer: 'Klicken Sie hier, um nähere Informationen zum Ablauf der Spende zu erhalten.',
          linkText: 'Ablauf der Spende'
        },
        q6: {
          question: 'Was ist das Ziel des Forschungsprojektes?',
          answer: 'Ein kleiner Schritt für Sie, ein Großer für die Wissenschaft! Nachdem sich die E-Mailkommunikation als eine übliche Form der Kommunikation in den zurückliegenden Jahrzehnten etabliert hat, interessiert uns, wie sich der Sprachgebrauch in den E-Mails charakterisieren lässt und inwiefern sich diese Form der Kommunikation von anderen Arten der schriftlichen Kommunikation wie der Briefkommunikation unterscheidet oder dieser eventuell auch ähnelt.'
        },
        q7: {
          question: 'Wer arbeitet im Forschungsprojekt zu den E-Mails?',
          answer: 'Das Projekt ist ein linguistisches Projekt an der Universität Heidelberg. Nur von der Projektleitung autorisierte Personen dürfen am Forschungsprojekt teilnehmen. Für mehr Informationen zum Team, klicken Sie hier.',
          linkText: 'Team'
        },
        q8: {
          question: 'Wie wird mit den Daten gearbeitet?',
          answer: 'Die E-Mails werden von uns ausschließlich in pseudonymisierter Form gespeichert und danach analysiert. In der Analyse haben wir keinen Zugriff auf Daten, d.h. auf E-Mails, die nicht pseudonymisiert sind. Die Daten werden ausschließlich für wissenschaftliche Zwecke genutzt.'
        },
        q9: {
          question: 'Wie werden die E-Mails pseudonymisiert?',
          answer: 'Die E-Mails werden zunächst automatisch pseudonymisiert. Dazu nutzen wir ein entsprechendes Tool (mailcom), welches wir im vergangenen Jahr an hunderten Test-E-Mails überprüft haben. Durch die Pseudonymisierung werden alle persönlichen Daten wie Namen, Telefonnummer oder Adressen aus den E-Mails herausgestrichen und durch Platzhalter wie Name für Sabine Mustermann ersetzt. Im Anschluss werden die pseudonymisierten E-Mails noch einmal von geschulten studentischen Hilfskräften des Projektes durchsucht und gegebenenfalls komplett pseudonymisiert, so dass nur vollständig pseudonymisierte E-Mails von uns in die Analysen einbezogen werden.',
          linkText: 'Tool (mailcom)'
        },
        q10: {
          question: 'Wo werden meine E-Mails gespeichert?',
          answer: 'Die pseudonymisierten E-Mails werden auf einem passwortgeschützten Server der Universität Heidelberg zwischengespeichert. Eine längerfristige Speicherung erfolgt nur von diesen vollständig pseudonymisierten E-Mails.'
        },
        q11: {
          question: 'Wer kann meine E-Mails einsehen?',
          answer: 'Die von Ihnen gespendeten E-Mails sind vor unbefugtem Zugriff geschützt. Die Pseudonymisierung stellt sicher, dass keine persönlichen Daten identifizierbar bleiben. Nach der Pseudonymisierung werden die E-Mails in einer Datenbank abgelegt, die für Forschungszwecke genutzt wird. Dort werden die E-Mails anhand spezifischer Suchanfragen analysiert, welche sich - je nach der gewählten Forschungsfrage - unterscheiden können. Der Zugang zu den pseudonymisierten E-Mails ist streng limitiert. Nur von der Projektleitung autorisierte Personen dürfen auf die E-Mails zugreifen. Dazu gehören:',
          listItems: ['Postdoktorand*innen,', 'Doktorand*innen,', 'ausgewählte studentische Hilfskräfte, die im Projekt mitarbeiten.'],
          afterList: 'So wird sichergestellt, dass Ihre Daten ausschließlich im Rahmen des Forschungsprojekts und durch qualifizierte Fachkräfte verarbeitet werden.'
        },
        q12: {
          question: 'Wie / Wo werden die Daten gegebenenfalls veröffentlicht?',
          answer: 'Die E-Mails werden von uns wissenschaftlich ausgewertet. Die daraus entstehenden Forschungsergebnisse werden in Fachpublikationen veröffentlicht. In diesen werden in Auszügen Einzelbeispiele aus dem E-Mail-Korpus zur Illustration wissenschaftlicher Aussagen in pseudonymisierter Form veröffentlicht. Falls Sie mehr über unsere Forschungsergebnisse wissen möchten, können Sie sich hier zu unserem Newsletter anmelden.',
          linkText: 'Newsletter'
        },
        q13: {
          question: 'Wie kann ich meine Emails spenden?',
          answer: 'Folgen Sie der Anleitung unter "Datenspende". Sie werden in der Datenspende darum gebeten, die Emails die Sie spenden möchten, an eine Spender-Adresse weiterzuleiten. Weiterhin werden einige wenige Metadaten abgefragt, die für die Forschungsarbeiten wichtig sind. Sowohl die Metadaten als auch die gespendeten Emails können nach erfolgter Pseudonymisierung nicht mehr einer Person zugeordnet werden und enthalten keine persönliche Daten.'
        },
        q14: {
          question: 'Was muss ich beim Spenden meiner Emails beachten?',
          answer: 'Sie werden in der Datenspende darum gebeten, die Emails die Sie spenden möchten, an eine Spender-Adresse weiterzuleiten. Bitte leiten Sie keine zu großen Anhänge weiter (>10 MB)'
        },
        q15: {
          question: 'Welche technischen Voraussetzungen benötige ich, um E-Mails spenden zu können?',
          answer: 'Sie müssen lediglich Ihre Emails an die im Spendevorgang angegebene E-Mail Adresse weiterleiten.'
        }
      }
    },
  },
  fr: {
    nav: {
      about: 'À propos',
      blog: 'Blog',
      contact: 'Contact',
      donation: 'Don de données',
      faq: 'FAQ',
      team: 'Équipe',
      tutorial: 'Tutoriel',
    },
    homepage: {
      emailCommunication: {
        title: 'Communication par mail',
        description: 'C\'est il y a environ trente ans que le triomphe de l\'e-mail a commencé. Depuis lors, la communication par mail a peu à peu remplacé les lettres. D\'un point de vue linguistique, les e-mails et les lettres sont différents à bien des égards.'
      },
      dataSpende: {
        title: 'Don de données',
        description: 'Pour analyser les mails, nous avons besoin d\'un corpus. Nous comptons sur vos dons d\'e-mails. Apportez une contribution précieuse à la recherche et aidez-nous à mieux comprendre la communication par mail !'
      },
      tutorial: {
        title: 'Tutoriel',
        description: 'Comment participer à notre projet de recherche sur les e-mails ?'
      },
      blog: {
        title: 'Blog',
        description: 'Dernières mises à jour de notre recherche et découvertes.'
      }
    },
    about: {
      title: 'Description du projet',
      projectDescription: 'Même si l\'e-mail est utilisé, maintenant depuis des décennies, comme un moyen de communication dans les échanges personnels comme professionnels, il n\'existe que relativement peu de travaux linguistiques analysant précisément son usage de la langue. L\'une des raisons principales à ce faible nombre d\'études linguistiques approfondies tient au manque de données. Pour pouvoir analyser des e-mails, nous avons besoin d\'un corpus. Contrairement aux lettres dont une partie a été conservée jusqu\'à aujourd\'hui dans des archives très diverses, plus ou moins grandes, où elles peuvent être utilisées pour l\'analyse, nous ne disposons pas de base de données, pour les e-mails, pouvant nous fournir suffisamment de matière à analyser. Nous dépendons donc des dons d\'e-mails.',
      dataHandling: 'Avec les e-mails donnés que nous rendrons bien-sûr complètement anonymes, nous aurions la possibilité de traiter différents sujets linguistiques ou de répondre à la question de savoir si et pourquoi nous écrivons par mail différemment que par voie épistolaire.',
      dataHandlingTitle: 'Traitement des données/anonymisation',
      donorNote: ' Remarque à l\'attention des donateur·rice·s : Merci de ne donner que des e-mails que vous avez vous-même envoyés ou pour lesquels vous avez obtenu l\'accord de toutes les personnes impliquées dans l\'échange.',
      pseudonymizationTitle: 'Anonymisation des e-mails',
      pseudonymizationText: 'Les e-mails sont anonymisés automatiquement. Nous utilisons pour cela un outil dont nous avons vérifié l\'efficacité l\'année dernière, sur des centaines d\'e-mails tests. Grâce à l\'anonymisation, toutes les données personnelles telles que les noms, les numéros de téléphone ou les adresses sont supprimées des e-mails et remplacées par des caractères de substitution – l\'emplacement du nom sera par exemple remplacé par Jean Dupont.',
      numberAndTypeTitle: 'Nombre et type d\'e-mails',
      numberAndTypeText: 'Il n\'y a pas de limite au nombre d\'e-mails que vous donnez. Vous pouvez en principe en donner autant que vous le souhaitez. Nous collectons volontiers les e-mails écrits lors d\'occasions diverses et variées.',
      donateButton: 'Cliquez ici pour donner vos e-mails',
    },
    donation: {
      title: 'Don de données',
      buttonText: 'Aidez-nous en donnant vos e-mails pour la recherche!',
      modals: {
        formModal: {
          title: 'Métadonnées',
          gender: 'Sexe',
          genderOptions: {
            m: 'm',
            f: 'f',
            d: 'd',
            noAnswer: 'Aucune indication',
          },
          age: 'Tranches d\'âge',
          ageOptions: {
            under20: '<20',
            '21-30': '21-30',
            '31-40': '31-40',
            '41-50': '41-50',
            '51-60': '51-60',
            over60: '>60',
            noAnswer: 'Aucune indication',
          },
          nativeLanguage: 'La langue dans laquelle vous écrivez est-elle votre langue maternelle ?',
          nativeLanguageOptions: {
            yes: 'Oui',
            no: 'Non',
            noAnswer: 'Aucune indication',
          },
          buttons: {
            next: 'Suivant',
            cancel: 'Annuler',
          },
        },
        countryModal: {
          title: 'Métadonnées',
          label: 'Où avez-vous rédigé la plupart de vos messages ?',
          selectedCountry: 'Pays sélectionné :',
          buttons: {
            next: 'Suivant',
            back: 'Retour',
          },
        },
        forwardEmailModal: {
          title: 'Métadonnées',
          emailLabel: 'Votre adresse e-mail depuis laquelle vous faites un don :',
          revocationText: 'Si vous souhaitez révoquer votre don à un moment ultérieur, veuillez utiliser l\'ID que vous avez reçue dans l\'e-mail de confirmation.',
          forwardingText: 'Pour faire un don de vos e-mails, veuillez les transférer à l\'adresse suivante :',
          donationEmail: 'mailcom-donation@rose.uni-heidelberg.de',
          buttons: {
            submit: 'Soumettre',
            next: 'Suivant',
            back: 'Retour',
          },
        },
        disclosureModal: {
          title: 'Informations et déclaration de consentement',
          header: 'Informations et déclaration de consentement relatives au projet de recherche scientifique Écrire après la culture épistolaire – MailCom –',
          informationTitle: 'Informations sur le projet de recherche scientifique',
          informationText: 'Cher·ère participant·e au projet de recherche scientifique, Nous vous demandons votre consentement pour participer au projet de recherche scientifique MailCom et au traitement de vos données personnelles lié à celui-ci (voir formulaire ci-dessous). Vous pouvez révoquer votre consentement à tout moment. Ci-dessous, vous trouverez des informations sur le contenu et le déroulement du projet de recherche scientifique ainsi que sur l\'utilisation prévue de vos données :',
          whatIsItTitle: 'Quel est l\'objectif de ce projet de recherche scientifique ?',
          whatIsItText: 'Depuis plus de cinquante ans, l\'échange de courriels est possible et depuis 1971, l\'e-mail est largement utilisé comme moyen de communication personnel et professionnel. Au travail, entre amis, avec les autorités et dans les associations, des courriels sont écrits et reçus dans de nombreuses et dans différentes situations. Dans de nombreux domaines, l\'e-mail a remplacé la lettre comme forme de communication. L\'objectif du projet MailCom est d\'étudier dans quelle mesure l\'utilisation de la langue dans les courriels a changé, par rapport à la communication épistolaire traditionnelle qui a prévalu pendant des siècles. Le projet de recherche scientifique est mené pour analyser, d\'un point de vue linguistique, les aspects de standardisation des types de texte ou de discours, ainsi que des structures linguistiques individuelles. Le groupe de recherche sera soutenu dans ses débuts par le Heidelberg Center for Digital Humanities de l\'Université de Heidelberg, de 2024 à 2025.',
          procedureTitle: 'Quel est le déroulement précis du projet de recherche scientifique et comment mes données seront-elles utilisées ?',
          procedureText: 'Votre participation à ce projet de recherche scientifique consistera à prendre un peu de votre temps pour faire don de vos e-mails et à répondre à un questionnaire d\'environ 2 minutes. Pendant ce projet, vous aurez la possibilité de faire don d\'un certain nombre d\'e-mails ou d\'échanges de mails, selon votre choix. Dans un premier temps, on vous demandera de remplir un très court questionnaire sur votre situation en tant qu\'auteur·rice. Les informations ainsi collectées nous permettront, par exemple, de voir s\'il existe des différences régionales dans la rédaction d\'e-mails. Les informations recueillies via le questionnaire ne seront pas attribuables à votre personne, mais seront stockées et utilisées exclusivement pour l\'analyse linguistique, conjointement avec les e-mails déjà anonymisés. La deuxième étape est le don de données lui-même. Vous transférerez les e-mails que vous aurez sélectionnés pour le don à une adresse e-mail universitaire spécialement créée par l\'Université de Heidelberg. Veuillez ne pas nous faire don d\'e-mails appartenant à des tiers sans avoir obtenu leur consentement préalable ou si leur contenu contient des données relevant des articles 9 ou 10 du règlement général sur la protection des données (RGPD). Les e-mails dont vous nous avez fait don seront immédiatement et automatiquement anonymisés lorsqu\'ils arriveront sur nos serveurs universitaires. L\'anonymisation automatisée sera vérifiée à nouveau pour garantir une correction des éventuelles erreurs de l\'anonymisation automatisée. Toutes les données personnelles contenues dans les e-mails (noms, adresses, numéros de téléphone, dénominations de lieux, noms d\'associations et d\'organisations) seront remplacées, lors de l\'anonymisation avant le stockage des mails, par des caractères de remplacement, tel que Jean Dupont pour les noms. Cette étape rendra toute information personnelle non identifiable. Dans un troisième temps, nous vous enverrons un code PIN associé à votre don. Conservez impérativement ce code. En cas de demande de suppression de vos données pour le projet de recherche, c\'est ce code qui nous permettra d\'accéder aux e-mails dont vous avez fait don et que nous avons anonymisés.',
          costsTitle: 'Des coûts vont-ils m\'être facturés pour participer à ce projet de recherche scientifique et une indemnisation de frais sera-t-elle versée ?',
          costsText: 'Votre participation à ce projet de recherche scientifique ne vous demandera aucun frais. Aucune indemnisation de frais ne sera versée pour votre participation à ce projet de recherche scientifique. Vous ne pouvez prétendre à aucune autre forme de rémunération, à aucun droit d\'auteur·rice ou à aucun bénéfice financier ou gain qui pourraient être réalisés sur la base des résultats de la recherche.',
          withdrawalTitle: 'Qui est-ce qui décide si je dois quitter prématurément le projet de recherche scientifique ?',
          withdrawalText: 'La participation à ce projet de recherche scientifique se fait sur la base du volontariat. Vous pouvez à tout moment demander la suppression de vos e-mails sans devoir fournir de justification, et sans répercussion négative. Pour effectuer la suppression, envoyez-nous le code PIN que vous avez reçu à la fin de votre don dans un e-mail informel à l\'adresse mailcom@rose.uni-heidelberg.de.',
          revocationTitle: 'Information sur le retrait du consentement',
          revocationText: 'Vous pouvez retirer votre consentement au don de données à tout moment. À partir du moment du retrait, nous n\'utiliserons plus vos données. Pour exercer votre droit de retrait, envoyez-nous un e-mail avec votre numéro d\'identification (que vous recevrez lors du don de données par mail) et indiquez-nous de manière informelle mais claire que vous souhaitez retirer votre consentement. Vos données ne seront plus utilisées pour des fins scientifiques ou des publications à partir du moment de votre retrait.',
          dataProtectionHeader: 'Information sur la protection des données : Que deviennent mes données ?',
          dataCollectionTitle: 'Quelles sont les données qui seront collectées dans le cadre du projet de recherche scientifique ?',
          dataCollectionIntro: 'Dans le cadre du projet de recherche scientifique, les données suivantes seront collectées :',
          dataCollectionItems: {
            emails: 'Les e-mails que vous nous transmettez en les transférant à l\'adresse de don',
            questionnaire: 'Les données du questionnaire concernant votre personne (âge, sexe, données géolinguistiques (par exemple, la région dans laquelle les e-mails ont été rédigés))',
          },
          dataCollectionNote: 'Les données du projet peuvent également inclure des catégories particulières de données personnelles, telles que des données personnelles qui révèlent des opinions politiques, des convictions religieuses ou philosophiques ou l\'appartenance à un syndicat, des données sur la vie sexuelle ou sur l\'orientation sexuelle.',
          dataProcessingTitle: 'De quelle manière les données sont-elles traitées dans le cadre du projet de recherche scientifique ?',
          dataProcessingText: 'Les données produites par le projet, c\'est-à-dire les e-mails et les réponses au bref questionnaire, sont automatiquement anonymisées. Toutes les informations qui pourraient conduire à l\'identification de votre personne (par exemple le nom, l\'adresse e-mail, les noms de lieux, les numéros de téléphone, les noms d\'associations et d\'organisations) et toutes autres indications sont modifiées et ainsi rendues non reconnaissables. L\'évaluation des données par les membres du projet n\'a lieu qu\'après l\'anonymisation des données. Dans certains cas, d\'autres passages de texte peuvent être supprimés ou partiellement déformés par des membres de notre projet pour garantir l\'anonymat complet des auteur·rice·s. Dans les publications scientifiques, dans les conférences et les colloques, aucune donnée personnelle vous concernant ne sera mentionnée, c\'est-à-dire que les résultats de la recherche seront publiés sans référence à votre personne. Les e-mails anonymisés ne seront pas cités en entier, seulement en extraits pour garantir qu\'aucun tiers ne pourra, d\'après le contexte global des événements, identifier votre personne.',
          dataAccessTitle: 'Qui a connaissance des données et quelles personnes et institutions y ont accès ?',
          dataAccessText: 'Seuls les membres du projet de recherche scientifique ont accès à vos e-mails et aux données. Ces personnes sont tenues de respecter les exigences en matière de protection des données. Les données sont protégées contre tout accès non autorisé.',
          rightsTitle: 'Quels sont les droits des personnes concernées par le traitement des données ?',
          rightsIntro: 'La participation au projet de recherche scientifique se fait sur la base du volontariat ; si vous ne participez pas, vous ne subirez aucun préjudice. Vous avez à tout moment la possibilité d\'exercer les droits suivants :',
          rightsItems: {
            information: 'Droit d\'accès aux données personnelles vous concernant (art. 15 RGPD)',
            correction: 'Droit de rectification des données personnelles inexactes vous concernant (art. 16 RGPD)',
            deletion: 'Droit d\'effacement des données personnelles vous concernant (art. 17 RGPD)',
            restriction: 'Droit de limitation du traitement des données personnelles vous concernant (art. 18 RGPD)',
            objection: 'Droit d\'opposition au traitement des données personnelles vous concernant (art. 21 RGPD)',
            complaint: 'Vous avez également le droit de vous plaindre auprès d\'une autorité de contrôle de la protection des données du traitement de vos données personnelles par nos soins (art. 77 RGPD)',
            revocation: 'Dans la mesure où vous avez consenti au traitement de vos données, vous avez la possibilité de révoquer ce consentement pour l\'avenir à tout moment (art. 7, par. 3 RGPD). Dans ce cas, toutes les données personnelles devront être supprimées ou anonymisées.',
          },
          rightsContact: 'Vos droits doivent en principe être exercés par écrit auprès du responsable du traitement des données. Veuillez adresser votre révocation à l\'adresse e-mail suivante : mailcom@rose.uni-heidelberg.de.',
          responsibilityTitle: 'Qui est-ce qui est responsable du projet de recherche scientifique et du traitement des données qui en découlent ? À qui puis-je m\'adresser pour obtenir des informations supplémentaires ?',
          responsibilityText: 'Le projet de recherche scientifique est mené par l\'UFR des langues romanes de l\'Université de Heidelberg, Seminarstraße 3, 69117 Heidelberg. La responsable du traitement des données est la professeure des universités Sybille Große, directrice du projet MailCom à l\'Université de Heidelberg. Pour les questions relatives à la protection des données, veuillez vous adresser au responsable de la protection des données, Christoph Wassermann, Seminarstraße 2, 69117 Heidelberg, datenschutz@uni-heidelberg.de et, si vous le souhaitez, également au bureau de la protection des données via : datenschutz@uni-heidelberg.de.',
          dataProtectionTitle: 'Protection des données',
          dataProtectionText: 'Je suis conscient·e que cette étude implique le traitement de données personnelles. J\'ai été informé·e et j\'accepte de plein gré que les données collectées lors de l\'étude (âge, sexe, informations géolinguistiques) et les informations relatives à ma personne soient évaluées sous forme anonymisée. Le traitement des données est effectué conformément aux dispositions légales et nécessite, en vertu de l\'article 6, paragraphe 1, point a du règlement général sur la protection des données, la déclaration de consentement suivante : J\'ai été informé·e et j\'accepte de plein gré que les données collectées lors de l\'étude soient enregistrées et évaluées sous forme anonymisée aux fins décrites dans le document d\'information. Lors de la publication des résultats de l\'étude, mon nom ne sera pas non plus mentionné. Les données personnelles seront anonymisées. Je suis conscient·e que ce consentement peut être révoqué à tout moment par écrit, sans motif et sans que cela ait des répercussions négatives. La légalité du traitement des données effectué jusqu\'à la révocation n\'en est pas affectée. J\'ai la liberté de demander la suppression des données collectées, en adressant ma demande de suppression à : mailcom@rose.uni-heidelberg.de.',
          checkboxText: 'J\'ai lu les informations sur la protection des données et j\'accepte le traitement de mes données.',
          buttons: {
            accept: 'J\'accepte et je soumets mes données',
            reject: 'Refuser',
          },
        },
        alerts: {
          confirmRequired: 'Veuillez confirmer la déclaration de consentement pour continuer.',
          rejected: 'Vous avez refusé la déclaration de consentement. Vos données ne seront pas enregistrées.',
        },
      },
    },
    tutorial: {
      title: 'Tutoriel',
      description: 'Apprenez pas à pas comment participer à notre projet de recherche sur les e-mails. Ici, vous trouverez bientôt une vidéo explicative détaillée.'
    },
    blog: {
      title: 'Blog',
      description: 'Ici, vous trouverez les dernières actualités de notre projet de recherche sur les e-mails ainsi que nos découvertes.'
    },
    contact: {
      title: 'Contact',
      description: 'Contactez notre équipe de recherche sous mailcom@rose.uni-heidelberg.de. Nous nous réjouissons de recevoir vos questions et suggestions.'
    },
    team: {
      title: 'Notre Équipe',
      description: 'Découvrez les personnes qui se cachent derrière notre projet. Notre équipe s\'engage à rendre l\'anonymisation accessible et compréhensible.'
    },
    faq: {
      title: 'FAQ – Questions fréquemment posées',
      description: 'Ici, vous trouverez les réponses aux questions fréquemment posées à propos du projet.',
      questions: {
        q1: {
          question: 'Quel est l\'intérêt pour moi de faire don de mes e-mails ?',
          answer: 'En donnant vos e-mails, vous apportez une immense contribution à la recherche linguistique ! Sans les dons d\'e-mails, la recherche n\'aurait pas de base de données lui permettant de se faire une idée réaliste de la manière dont les gens écrivent réellement. C\'est pourquoi nous vous remercions de votre soutien !'
        },
        q2: {
          question: 'Qui est-ce qui peut faire don de ses e-mails ?',
          answer: 'Toutes les personnes majeures peuvent donner leurs e-mails.'
        },
        q3: {
          question: 'Quel type d\'e-mails est-ce que je peux donner ? (Messages informels, professionnels ...)',
          answer: 'Plus c\'est, mieux c\'est : Vous pouvez donner autant de mails que vous le souhaitez ! Seulement, vous ne pouvez faire don que des e-mails que vous avez-vous-même envoyés ou pour lesquels vous avez obtenu l\'accord des personnes impliquées. Nous collectons volontiers les e-mails écrits lors d\'occasions diverses et variées.'
        },
        q4: {
          question: 'Quelle est la durée approximative d\'un don d\'e-mails ?',
          answer: 'La durée dépend du nombre d\'e-mails dont vous faites don.'
        },
        q5: {
          question: 'Comment puis-je faire don de mes e-mails ?',
          answer: 'Cliquez ici pour obtenir plus d\'informations sur le processus de don.',
          linkText: 'ici'
        },
        q6: {
          question: 'Quel est l\'objectif de ce projet de recherche ?',
          answer: 'Un petit pas pour vous, un grand pas pour la science ! La communication par mail est devenue une forme de communication courante au cours des dernières décennies. Nous nous intéressons à la manière dont on peut caractériser l\'usage de la langue dans ces e-mails, et nous demandons en quoi cette forme de communication se distingue ou ressemble à d\'autres types de correspondance écrite (comme par exemple, les échanges épistolaires).'
        },
        q7: {
          question: 'Qui est-ce qui travaille dans ce projet de recherche sur les e-mails ?',
          answer: 'Ce projet de linguistique est mené par une équipe de l\'Université de Heidelberg. Seules les personnes autorisées par la direction du projet peuvent y participer. Pour plus d\'informations sur l\'équipe, cliquez ici.',
          linkText: 'ici'
        },
        q8: {
          question: 'Comment les données sont-elles traitées ?',
          answer: 'Nous enregistrons les e-mails directement et uniquement sous forme anonymisée et les analysons ensuite. Lors de l\'analyse, nous n\'avons donc pas accès aux données, c\'est-à-dire aux e-mails non anonymisés. Les données sont exclusivement utilisées à des fins scientifiques.'
        },
        q9: {
          question: 'Comment les e-mails sont-ils anonymisés ?',
          answer: 'Les e-mails sont anonymisés automatiquement. Nous utilisons pour cela un outil dont nous avons vérifié l\'efficacité l\'année dernière sur des centaines de mails tests. Grâce à l\'anonymisation, toutes les données personnelles telles que le nom, le numéro de téléphone ou l\'adresse sont supprimées des e-mails et remplacées par des caractères de substitution – l\'emplacement du nom sera par exemple remplacé par Jean Dupont. Ensuite, ces e-mails anonymisés automatiquement sont à nouveau examinés par des étudiant·e·s assistant·e·s formé·e·s au projet. Cela garantit que seuls les e-mails entièrement anonymisés seront pris en compte dans nos analyses.',
          linkText: 'outil (mailcom)'
        },
        q10: {
          question: 'Où est-ce que mes e-mails sont stockés ?',
          answer: 'Les e-mails anonymisés sont stockés temporairement sur un serveur de l\'Université de Heidelberg, protégé par un mot de passe. Seuls les mails entièrement anonymisés seront stockés à plus long terme.'
        },
        q11: {
          question: 'Qui est-ce qui peut consulter mes e-mails ?',
          answer: 'Les e-mails que vous nous envoyez sont protégés contre tout accès non autorisé. Grâce à l\'anonymisation automatique, aucune donnée personnelle n\'est reconnaissable. Après l\'anonymisation, les e-mails sont stockés dans une base de données, utilisée à des fins de recherche. Les e-mails y sont analysés à l\'aide de paramètres de recherche spécifiques – ceux-ci sont variables en fonction de la question de recherche choisie. L\'accès aux e-mails anonymisés est strictement limité. Seules les personnes autorisées par la direction du projet peuvent analyser les e-mails. Les membres en faisant partie sont :',
          listItems: ['Les post-doctorant.e.s,', 'Les doctorant.e.s,', 'Les étudiant.e.s assistant.e.s sélectionné.e.s et collaborant au projet.'],
          afterList: 'Cela nous permet de vous garantir que vos données sont traitées exclusivement dans le cadre de ce projet de recherche et par des professionnel·le·s qualifié·e·s.'
        },
        q12: {
          question: 'Comment et où les données sont-elles éventuellement publiées ?',
          answer: 'Les e-mails sont analysés scientifiquement par nos soins. Les résultats de recherche qui en découlent sont diffusés dans des publications spécialisées. Dans ces dernières, des exemples isolés, tirés du corpus des e-mails, sont publiés sous une forme anonymisée, afin d\'illustrer des thèses scientifiques. Si vous souhaitez en savoir plus sur les résultats de nos recherches, vous pouvez vous abonner à notre newsletter ici.',
          linkText: 'ici'
        },
        q13: {
          question: 'Comment procéder au don de mes e-mails ?',
          answer: 'Suivez les instructions données dans la rubrique "Don de données". Lors du don d\'e-mails, il vous sera demandé de transférer les mails que vous souhaitez donner à une adresse de donateur. Aussi, on vous demandera de renseigner quelques métadonnées qui sont importantes pour nos travaux de recherche. Après l\'étape d\'anonymisation, il sera impossible de reconnaître la donatrice ou le donateur des e-mails et des métadonnées puisqu\'ils ne contiendront plus aucune donnée personnelle.'
        },
        q14: {
          question: 'À quoi dois-je faire attention lors du don de mes mails ?',
          answer: ' Lors du don d\'e-mails, il vous sera demandé de transférer les mails que vous souhaitez donner à une adresse de donateur. Veuillez ne pas transférer de pièce jointe trop volumineuse (max. 10 MB).'
        },
        q15: {
          question: 'De quelles conditions techniques ai-je besoin pour donner mes e-mails ?',
          answer: 'Vous devez simplement transférer vos e-mails à l\'adresse mail indiquée lors du processus de don.'
        }
      }
    },
  }
} as const;

export type Language = keyof typeof translations;
export type TranslationKey = keyof typeof translations.de;
