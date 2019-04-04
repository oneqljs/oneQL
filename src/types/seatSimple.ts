const simpleTypes = `
  extend type Query {
    seatSimple: SearchSeatSimple
  }

  type SearchSeatSimple {
    ResponseStatus: ResponseStatus
    resultList: [SimpleResultList]
    passengerRefList: [PassengerRef]
  }

  type ResponseStatus {
    Timestamp: String
    Ack: String # TODO: enum Ack { Success xx1 xx2 }
    Errors: [String] # TODO:
  }

  type SimpleResultList {
    fInfo: FInfo
    passengerResultList: [PassengerResult]
  }

  type FInfo {
    fNo: String
    airline: String
    dCity: String
    aCity: String
    dPort: String
    aPort: String
    departDate: String
    departDateOfGMT: String
    arrivalDate: String
    craftType: String
  }

  type PassengerResult {
    orderID: String
    primaryOrderID: String
    segmentNo: String
    sequence: String
    passengerRefId: String
    checkInResult: CheckInResult
    bookSeatResult: BookSeatResult
  }

  type CheckInResult {
    Class: String
    subClass: String
    earliestTime: String
    latestTime: String
    isCheckIn: Boolean
    isInternation: String
    haveCheckIn: Boolean
    isCancelCheckIn: Boolean
    credentialType: String
    credentialNo: String
    mobilePhone: String
    checkInId: String
    checkInTimes: Int
    ticketNo: String
    isOrder: Boolean
    noCheckInReason: String # Success
    isAutoCheckIn: Boolean
    canModifyPrefer: Boolean
    autoCheckinBeginTime: String
    autoCheckinEndTime: String
    isChild: SimpleBoolean
    isSeatMapCode: SimpleBoolean
    isGenerateBarcode: SimpleBoolean
    isGenerateQRCode: SimpleBoolean
    isMulCheckIn: SimpleBoolean
    isNeedDport: SimpleBoolean
    isNeedName: SimpleBoolean
    isFromOtherUid: SimpleBoolean
    isNeedDocs: SimpleBoolean
    checkInType: String
  }

  enum SimpleBoolean {
    T
    F
  }

  type BookSeatResult {
    tripType: String # enum
    Class: String # enum
    subClass: String # enum
    orderDate: String
    recordNo: String
    seatError: String
    message: String
    isSupportBookSeat: Boolean
    isSupportPushMessage: Boolean
    reserveSeattype: String # enum
    operateTime: String
    isHaveBookSeat: Boolean
    isCancelBookSeat: Boolean
    bookSeatTime: String
    tagList: [Tag]
    paymentTimeLimit: Int
    xProductOrderID: Int
    xProductOrderProcessStatus: Int
    airlineBookSeatLink: String
  }

  type Tag {
    key: String # enum BOOKSEAT_DIRECTLY
    value: SimpleBoolean
  }

  type PassengerRef {
    refId: Int
    passengerName: String
    gender: SimpleBoolean
    cardType: String # enum PASSPORT
    cardNo: String
    contactTel: String
    contactEmail: String
    birthDate: String
    nationality: String
    ageType: String # enum ADT
  }
`

export default simpleTypes
