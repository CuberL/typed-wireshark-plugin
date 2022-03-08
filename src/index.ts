export {}

declare global {
    interface Address {
        _lua_type: 'Address'
    }
    interface __Address {
        /**
         * Creates an Address Object representing an IPv4 address.
         * @param hostname The address or name of the IP host.
         */
        ip(this: void, hostname: string): Address
        /**
         * Creates an Address Object representing an IPv6 address.
         * @param hostname The address or name of the IP host.
         */
        ipv6(this: void, hostname: string): Address
        /**
         * Creates an Address Object representing an Ethernet address.
         * @param eth The Ethernet address.
         */
        ether(this: void, eth: string): Address
    }
    const Address: __Address

    interface Column {
        /**
         * Clears a Column.
         */
        clear(): void,
        /**
         * Sets the text of a Column.
         */
        set(text: string): void,
        /**
         * Appends text to a Column.
         */
        append(text: string): void,
        /**
         * The text to prepend to the Column.
         */
        prepend(text: string): void,
        /**
         * Sets Column text fence, to prevent overwriting.
         */
        fence(): void
        /**
         * Clear Column text fence.
         */
        clear_fence(): void
    }

    interface Columns {
        /**
         * Frame number
         */
        number: string
        /**
         * Absolute timestamp
         */
        abs_time: string,
        /**
         * UTC timestamp
         */
        utc_time: string,
        /**
         * CLS timestamp
         */
        cls_time: string,
        /**
         * Relative timestamp
         */
        rel_time: string,
        /**
         * Absolute date and time
         */
        date: string,
        /**
         * "Absolute year, day of year, and time"
         */
        date_doy: string,
        /**
         * UTC date and time
         */
        utc_date: string,
        /**
         * "UTC year, day of year, and time"
         */
        utc_date_doy: string,
        /**
         * Delta time from previous packet
         */
        delta_time: string,
        /**
         * Delta time from previous displayed packet
         */
        delta_time_displayed: string,
        /**
         * Source address
         */
        src: string,
        /**
         * Resolved source address
         */
        src_res: string,
        /**
         * Numeric source address
         */
        src_unres: string,
        /**
         * Source data link address
         */
        dl_src: string,
        /**
         * Resolved source data link address
         */
        dl_src_res: string,
        /**
         * Numeric source data link address
         */
        dl_src_unres: string,
        /**
         * Source network address
         */
        net_src: string,
        /**
         * Resolved source network address
         */
        net_src_res: string,
        /**
         * Numeric source network address
         */
        net_src_unres: string,
        /**
         * Destination address
         */
        dst: string,
        /**
         * Resolve destination address
         */
        dst_res: string,
        /**
         * Numeric destination address
         */
        dst_unres: string,
        /**
         * Destination data link address
         */
        dl_dst: string,
        /**
         * Resolved destination data link address
         */
        dl_dst_res: string,
        /**
         * Numeric destination data link address
         */
        dl_dst_unres: string,
        /**
         * Destination network address
         */
        net_dst: string,
        /**
         * Resolved destination network address
         */
        net_dst_res: string,
        /**
         * Numeric destination network address
         */
        net_dst_unres: string,
        /**
         * Source port
         */
        src_port: string,
        /**
         * Resolved source port
         */
        src_port_res: string,
        /**
         * Numeric source port
         */
        src_port_unres: string,
        /**
         * Destination port
         */
        dst_port: string,
        /**
         * Resolved destination port
         */
        dst_port_res: string,
        /**
         * Numeric destination port
         */
        dst_port_unres: string,
        /**
         * Protocol name
         */
        protocol: string,
        /**
         * General packet information
         */
        info: string,
        /**
         * Packet length
         */
        packet_len: string,
        /**
         * Cumulative bytes in the capture
         */
        cumulative_bytes: string,
        /**
         * Packet direction
         */
        direction: string,
        /**
         * Virtual SAN
         */
        vsan: string,
        /**
         * Transmit rate
         */
        tx_rate: string,
        /**
         * RSSI value
         */
        rssi: string,
        /**
         * DCE call
         */
        dce_call: string
    }

    interface NSTime {
        tonumber(): number
        secs: number
        nsecs: number
    }
    interface __NSTime {
        new: (this: void, seconds ?: number, nseconds ?: number) => NSTime
        (this: void, seconds ?: number, nseconds ?: number): NSTime
    }
    const NSTime: __NSTime

    interface Pinfo {
        /**
         * Whether this packet has been already visited.
         */
        visited: boolean,
        /**
         * The number of this packet in the current file.
         */
        number: number,
        /**
         * The length of the frame.
         */
        len: number,
        /**
         * The captured length of the frame.
         */
        caplen: number,
        /**
         * When the packet was captured.
         */
        abs_ts: number,
        /**
         * Number of seconds passed since beginning of capture.
         */
        rel_ts: number,
        /**
         * Number of seconds passed since the last captured packet.
         */
        delta_ts: number,
        /**
         * Number of seconds passed since the last displayed packet.
         */
        delta_dis_ts: number,
        /**
         * Which Protocol are we dissecting.
         */
        curr_proto: string,
        /**
         * Set if this segment could be desegmented.
         */
        can_desegment: boolean,
        /**
         * Estimated number of additional bytes required for completing the PDU.
         */
        desegment_len: number,
        /**
         * Offset in the tvbuff at which the dissector will continue processing when next called.
         */
        desegment_offset: number,
        /**
         * If the protocol is only a fragment.
         */
        fragmented: boolean,
        /**
         * If we’re inside an error packet.
         */
        in_error_pkt: boolean,
        /**
         * Matched uint for calling subdissector from table.
         */
        match_uint: number,
        /**
         * Matched string for calling subdissector from table.
         */
        match_string: string,
        /**
         * Type of Port of .src_port and .dst_port.
         */
        port_type: number,
        /**
         * Source Port of this Packet.
         */
        src_port: number,
        /**
         * Destination Port of this Packet.
         */
        dst_port: number,
        /**
         * Data Link Source Address of this Packet.
         */
        dl_src: Address,
        /**
         * Network Layer Source Address of this Packet.
         */
        net_src: Address,
        /**
         * Network Layer Destination Address of this Packet.
         */
        net_dst: Address,
        /**
         * Source Address of this Packet.
         */
        src: Address,
        /**
         * Destination Address of this Packet.
         */
        dst: Address,
        /**
         * Direction of this Packet.
         */
        p2p_dir: 'incoming' | 'outgoing',
        /**
         * Port/Data we are matching.
         */
        match: string,
        /**
         * Access to the packet list columns.
         */
        columns: Columns,
        /**
         * Access to the packet list columns (equivalent to pinfo.columns).
         */
        cols: Pinfo['columns'],
        /**
         * Access to the private table entries.
         */
        private: any,
        /**
         * Higher Address of this Packet.
         */
        hi: Address,
        /**
         * Lower Address of this Packet.
         */
        lo: Address,
        /**
         * Sets the packet conversation to the given Proto object.
         */
        conversation: any
    }

    interface Dissector {
        call(buf: Tvb, info: Pinfo, tree: TreeItem): number
        (buf: Tvb, info: Pinfo, tree: TreeItem): void
    }
    interface __Dissector {
        get(this: void, name: string): Dissector
        list(this: void): Array<string> 
    }
    const Dissector: __Dissector;

    interface DissectorTable {
        add(pattern: number | string, dissector: Proto | Dissector): void
        set(pattern: number | string, dissector: Proto | Dissector): void
        remove(pattern: number | string, dissector: Proto | Dissector): void
        remove_all(dissector: Proto | Dissector): void
        try(pattern: number | string, tvb: Tvb, pinfo: Pinfo, tree: TreeItem): number
        get_dissector(pattern: number | string): Dissector | null
        add_for_decode_as(proto: Proto): void
    }
    interface __DissectorTable {
        new: (this: void, tablename: string, uiname ?: string, type ?: ftypes, base ?: base.NONE | base.DEC | base.HEX | base.OCT | base.DEC_HEX | base.HEX_DEC, proto ?: Proto) => DissectorTable
        list(this: void): Array<string>
        heuristic_list(this: void): Array<string>
        try_heuristics(this: void, listname: string, tvb: Tvb, pinfo: Pinfo, tree: TreeItem): boolean
        get(this: void, tablename: string): DissectorTable | null
    }
    const DissectorTable: __DissectorTable

    interface Pref {

    }
    interface __Pref {
        bool(this: void, label:string, default_value: boolean, descr: string): Pref
        uint(this: void, label:string, default_value: number, descr: string): Pref
        string(this: void, label:string, default_value: string, descr: string): Pref
        enum<T>(this: void, label: string, default_value: T, descr: string, enum_table: Array<[number, string, T]>, radio: boolean): Pref
        range(this: void, label: string, default_value: string, descr: string, max: number): Pref
        statictext(this: void, label: string, descr: string): Pref
    }
    const Pref: __Pref

    type Prefs = {[K: string]: Pref}

    interface Proto {
        register_heuristic(listname: string, func: (buf: Tvb, info: Pinfo, tree: TreeItem) => boolean): void
        dissector(this: void, buf: Tvb, info: Pinfo, tree: TreeItem): void
        prefs: Prefs
        prefs_changed(this: void): void
        init(this: void): void
        name: string
        description: string
        fields: Array<ProtoField>
        experts: Array<ProtoExpert>
    }
    interface __Proto {
        new: (this: void, name: string, desc: string) => Proto
        (this: void, name: string, desc: string): Proto
    }
    const Proto: __Proto

    interface ProtoExpert {}
    interface __ProtoExpert {
        new: (this: void, abbr: string, text: string, group: expert.group, severity: expert.severity) => ProtoExpert
    }
    const ProtoExpert: __ProtoExpert

    interface ProtoField<T = any> {

    }    

    interface __ProtoField {
        new: (this: void, name: string, abbr: string, type: ftypes, valuestring ?: any, base ?: base.NONE | base.DEC | base.HEX | base.OCT | base.DEC_HEX | base.HEX_DEC | base.UNIT_STRING | base.RANGE_STRING, mask ?: number, descr ?: string) => ProtoField<any>
        char(this: void, abbr: string, name ?: string, base ?: base.NONE | base.OCT | base.HEX, valuestring ?: {[K: number]: string}, mask ?: number, desc ?: string): ProtoField<number>
        char(this: void, abbr: string, name ?: string, base ?: base.RANGE_STRING, valuestring ?: Array<[number, number, string]>, mask ?: number, desc ?: string): ProtoField<number>
        uint8(this: void, abbr: string, name ?: string, base ?: base.DEC | base.HEX | base.OCT | base.DEC_HEX | base.HEX_DEC, valuestring ?: {[K: number]: string}, mask ?: string, desc ?: string): ProtoField<number>
        uint8(this: void, abbr: string, name ?: string, base ?:  base.UNIT_STRING, valuestring ?: [string] | [string, string], mask ?: string, desc ?: string): ProtoField<number>
        uint8(this: void, abbr: string, name ?: string, base ?: base.RANGE_STRING, valuestring ?: Array<[number, number, string]>, mask ?: string, desc ?: string): ProtoField<number>
        uint16(this: void, abbr: string, name ?: string, base ?: base.DEC | base.HEX | base.OCT | base.DEC_HEX | base.HEX_DEC, valuestring ?: {[K: number]: string}, mask ?: string, desc ?: string): ProtoField<number>
        uint16(this: void, abbr: string, name ?: string, base ?:  base.UNIT_STRING, valuestring ?: [string] | [string, string], mask ?: string, desc ?: string): ProtoField<number>
        uint16(this: void, abbr: string, name ?: string, base ?: base.RANGE_STRING, valuestring ?: Array<[number, number, string]>, mask ?: string, desc ?: string): ProtoField<number>
        uint24(this: void, abbr: string, name ?: string, base ?: base.DEC | base.HEX | base.OCT | base.DEC_HEX | base.HEX_DEC, valuestring ?: {[K: number]: string}, mask ?: string, desc ?: string): ProtoField<number>
        uint24(this: void, abbr: string, name ?: string, base ?:  base.UNIT_STRING, valuestring ?: [string] | [string, string], mask ?: string, desc ?: string): ProtoField<number>
        uint24(this: void, abbr: string, name ?: string, base ?: base.RANGE_STRING, valuestring ?: Array<[number, number, string]>, mask ?: string, desc ?: string): ProtoField<number>
        uint32(this: void, abbr: string, name ?: string, base ?: base.DEC | base.HEX | base.OCT | base.DEC_HEX | base.HEX_DEC, valuestring ?: {[K: number]: string}, mask ?: string, desc ?: string): ProtoField<number>
        uint32(this: void, abbr: string, name ?: string, base ?:  base.UNIT_STRING, valuestring ?: [string] | [string, string], mask ?: string, desc ?: string): ProtoField<number>
        uint32(this: void, abbr: string, name ?: string, base ?: base.RANGE_STRING, valuestring ?: Array<[number, number, string]>, mask ?: string, desc ?: string): ProtoField<number>
        uint64(this: void, abbr: string, name ?: string, base ?: base.DEC | base.HEX | base.OCT | base.DEC_HEX | base.HEX_DEC, valuestring ?: {[K: number]: string}, mask ?: string, desc ?: string): ProtoField<Uint64>
        uint64(this: void, abbr: string, name ?: string, base ?:  base.UNIT_STRING, valuestring ?: [string] | [string, string], mask ?: string, desc ?: string): ProtoField<Uint64>
        uint64(this: void, abbr: string, name ?: string, base ?: base.RANGE_STRING, valuestring ?: Array<[number, number, string]>, mask ?: string, desc ?: string): ProtoField<Uint64>
        int8(this: void, abbr: string, name ?: string, base ?: base.DEC, valuestring ?: {[K: number]: string}, mask ?: string, desc ?: string): ProtoField<number>
        int8(this: void, abbr: string, name ?: string, base ?:  base.UNIT_STRING, valuestring ?: [string] | [string, string], mask ?: string, desc ?: string): ProtoField<number>
        int8(this: void, abbr: string, name ?: string, base ?: base.RANGE_STRING, valuestring ?: Array<[number, number, string]>, mask ?: string, desc ?: string): ProtoField<number>
        int16(this: void, abbr: string, name ?: string, base ?: base.DEC, valuestring ?: {[K: number]: string}, mask ?: string, desc ?: string): ProtoField<number>
        int16(this: void, abbr: string, name ?: string, base ?:  base.UNIT_STRING, valuestring ?: [string] | [string, string], mask ?: string, desc ?: string): ProtoField<number>
        int16(this: void, abbr: string, name ?: string, base ?: base.RANGE_STRING, valuestring ?: Array<[number, number, string]>, mask ?: string, desc ?: string): ProtoField<number>
        int24(this: void, abbr: string, name ?: string, base ?: base.DEC, valuestring ?: {[K: number]: string}, mask ?: string, desc ?: string): ProtoField<number>
        int24(this: void, abbr: string, name ?: string, base ?:  base.UNIT_STRING, valuestring ?: [string] | [string, string], mask ?: string, desc ?: string): ProtoField<number>
        int24(this: void, abbr: string, name ?: string, base ?: base.RANGE_STRING, valuestring ?: Array<[number, number, string]>, mask ?: string, desc ?: string): ProtoField<number>
        int32(this: void, abbr: string, name ?: string, base ?: base.DEC, valuestring ?: {[K: number]: string}, mask ?: string, desc ?: string): ProtoField<number>
        int32(this: void, abbr: string, name ?: string, base ?:  base.UNIT_STRING, valuestring ?: [string] | [string, string], mask ?: string, desc ?: string): ProtoField<number>
        int32(this: void, abbr: string, name ?: string, base ?: base.RANGE_STRING, valuestring ?: Array<[number, number, string]>, mask ?: string, desc ?: string): ProtoField<number>
        int64(this: void, abbr: string, name ?: string, base ?: base.DEC, valuestring ?: {[K: number]: string}, mask ?: string, desc ?: string): ProtoField<Int64>
        int64(this: void, abbr: string, name ?: string, base ?:  base.UNIT_STRING, valuestring ?: [string] | [string, string], mask ?: string, desc ?: string): ProtoField<Int64>
        int64(this: void, abbr: string, name ?: string, base ?: base.RANGE_STRING, valuestring ?: Array<[number, number, string]>, mask ?: string, desc ?: string): ProtoField<Int64>
        framenum: (this: void, abbr: string, name ?: string, base ?: base.NONE, framenum ?: frametype, mask ?: string, desc ?: string) => ProtoField<number>
        bool: (this: void, abbr: string, name ?: string, display ?: number | base.NONE, valuestring ?: [string, string], mask ?: string, desc ?: string) => ProtoField<boolean>
        absolute_time: (this: void, abbr: string, name ?: string, base ?: base.LOCAL | base.UTC | base.DOY_UTC, desc ?: string) => ProtoField<string>
        relative_time: (this: void, abbr: string, name ?: string, desc ?: string) => ProtoField<string>
        float: (this: void, abbr: string, name ?: string, valuestring ?: [string] | [string, string], desc ?: string) => ProtoField<number>
        double: (this: void, abbr: string, name ?: string, valuestring ?: [string] | [string, string], desc ?: string) => ProtoField<number>
        string: (this: void, abbr: string, name ?: string, display ?: base.ASCII | base.UNICODE, desc ?: string) => ProtoField<string>
        stringz: (this: void, abbr: string, name ?: string, display ?: base.ASCII | base.UNICODE, desc ?: string) => ProtoField<string>
        bytes: (this: void, abbr: string, name ?: string, display ?: base.NONE | base.DOT | base.DASH | base.COLON | base.SPACE, desc ?: string) => ProtoField<Array<number>>
        ubytes: (this: void, abbr: string, name ?: string, display ?: base.NONE | base.DOT | base.DASH | base.COLON | base.SPACE, desc ?: string) => ProtoField<Array<number>>
        none: (this: void, abbr: string, name ?: string, desc ?: string) => ProtoField<null>
        ipv4: (this: void, abbr: string, name ?: string, desc ?: string) => ProtoField<Address>
        ipv6: (this: void, abbr: string, name ?: string, desc ?: string) => ProtoField<Address>
        ether: (this: void, abbr: string, name ?: string, desc ?: string) => ProtoField<Address>
        guid: (this: void, abbr: string, name ?: string, desc ?: string) => ProtoField<string>
        oid: (this: void, abbr: string, name ?: string, desc ?: string) => ProtoField<string>
        protocol: (this: void, abbr: string, name ?: string, desc ?: string) => ProtoField<string>
        rel_oid: (this: void, abbr: string, name ?: string, desc ?: string) => ProtoField<string>
        systemid: (this: void, abbr: string, name ?: string, desc ?: string) => ProtoField<string>
        eui64: (this: void, abbr: string, name ?: string, desc ?: string) => ProtoField<string>
    }
    const ProtoField: __ProtoField

    interface TreeItem {
        add_packet_field<T>(protofield: ProtoField<T>, label ?: string): LuaMultiReturn<[TreeItem, T, number]>
        add_packet_field<T>(protofield: ProtoField<T>, tvbrange: TvbRange, encoding: string, label ?: string): LuaMultiReturn<[TreeItem, T, number]>
        add<T>(protofield: Proto | ProtoField<T>, tvbrange: TvbRange, value ?: T, ...label: Array<string>): TreeItem
        add<T>(protofield: Proto | ProtoField<T>, value ?: T, ...label: Array<string>): TreeItem
        add(tvbrange ?: TvbRange, ...label: Array<string>): TreeItem
        add_le<T>(protofield: Proto | ProtoField<T>, tvbrange: TvbRange, value ?: T, ...label: Array<string>): TreeItem
        add_le<T>(protofield: Proto | ProtoField<T>, value ?: T, ...label: Array<string>): TreeItem
        add_le(tvbrange ?: TvbRange, ...label: Array<string>): TreeItem
        set_text(text: string): TreeItem
        append_text(text: string): TreeItem
        prepend_text(text: string): TreeItem
        /**
         * @deprecated This function does **not** create a truly filterable expert info for a protocol. Instead you should use TreeItem.add_proto_expert_info().
         */
        add_expert_info(group: string, severity: string, text ?: string): TreeItem
        add_proto_expert_info(expert: ProtoExpert, text ?: string): TreeItem
        add_tvb_expert_info(expert: ProtoExpert, tvb: Tvb | TvbRange, text ?: string): TreeItem
        set_generated(bool: boolean): TreeItem
        set_hidden(bool: boolean): TreeItem
        set_len(len: number): TreeItem
        referenced(protofield: ProtoField | Dissector): boolean
        text: string
        visible: boolean
        generated: boolean
        hidden: boolean
        len: number
    }

    interface ByteArray {
        prepend(prepended: ByteArray): void
        append(appended: ByteArray): void
        set_size(size: number): void
        set_index(index: number, value: number): void
        get_index(index: number): number
        len(): number
        subset(offset: number, length: number): ByteArray
        base64_decode(): ByteArray
        raw(offset: number, length: number): string
        tohex(lowercase ?: boolean, separator ?: string): string
        tvb(name: string): Tvb
    }
    interface __ByteArray {
        new: (this: void, hexbytes ?: string, separator ?: string) => ByteArray
    }
    const ByteArray: __ByteArray

    interface Tvb {
        reported_len(): number
        captured_len(): number
        len(): number
        reported_length_remaining(): number
        bytes(offset ?: number, length ?: number): ByteArray
        offset(): number
        range(offset ?: number, length ?: number): TvbRange
        (this: void, offset ?: number, length ?: number): TvbRange
        raw(offset ?: number, length ?: number): string
    }

    interface TvbRange {
        tvb(): Tvb
        uint(): number
        uint64(): Uint64
        int(): number
        int64(): Int64
        float(): number
        ipv4(): Address
        ipv6(): Address
        le_uint(): number
        le_uint64(): Uint64
        le_int(): number
        le_int64(): Int64
        le_float(): number
        le_ipv4(): Address
        le_ipv6(): Address
        nstime(encoding ?: string): NSTime 
        string(encoding ?: string): string
        ustring(): string
        stringz(): string
        strsize(encoding ?: string): number
        ustringz(): string
        bytes(encoding ?: string): ByteArray
        bitfield(position ?: number, length ?: number): number
        range(offset ?: number, length ?: number): TvbRange
        uncompress(name: string): TvbRange
        len(): number
        offset(): number
        raw(offset ?: number, length ?: number): string
    }

    interface Uint64 {
        encode(endian ?: boolean): Uint64
        tonumber(): number
        tohex(numbytes ?: number): string
        higher(): number
        lower(): number
    }
    interface __Uint64 {
        decode(this: void, str: string, endian: boolean | null): Uint64 | null
        new: (this: void, value ?: number | Uint64 | Int64 | string, highvalue ?: number) => Uint64
        max(this: void): Uint64
        min(this: void): Uint64
        fromhex(this: void, hex: string): Uint64
        (this: void): Uint64
    }
    const Uint64: __Uint64

    interface Int64 {
        encode(endian ?: boolean): Int64
        tonumber(): number
        tohex(numbytes ?: number): string
        higher(): number
        lower(): number
    }
    interface __Int64 {
        decode(this: void, str: string, endian: boolean | null): Int64 | null
        new: (this: void, value ?: number | Uint64 | Int64 | string, highvalue ?: number) => Int64
        max(this: void): Int64
        min(this: void): Int64
        fromhex(this: void, hex: string): Int64
        (this: void): Int64
    }
    const Int64: __Int64

    const PI_CHECKSUM: string
    const PI_SEQUENCE: string
    const PI_RESPONSE_CODE: string
    const PI_REQUEST_CODE: string
    const PI_UNDECODED: string
    const PI_REASSEMBLE: string
    const PI_MALFORMED: string
    const PI_DEBUG: string
    const PI_CHAT: string
    const PI_NOTE: string
    const PI_WARN: string
    const PI_ERROR: string

    enum ftypes {
        UINT8 = 'uint8',
        UINT16 = 'uint16',
        UINT24 = 'uint24',
        UINT32 = 'uint32',
        STRING = 'string',
        BOOLEAN = 'boolean', 
        CHAR = 'char', 
        UINT64 = 'uint64', 
        INT8 = 'int8', 
        INT16 = 'int16', 
        INT24 = 'int24', 
        INT32 = 'int32', 
        INT64 = 'int64', 
        FLOAT = 'float', 
        DOUBLE = 'double', 
        ABSOLUTE_TIME = 'absolute_time', 
        RELATIVE_TIME = 'relative_time', 
        STRINGZ = 'stringz', 
        UINT_STRING = 'uint_string', 
        ETHER = 'ether', 
        BYTES = 'bytes', 
        UINT_BYTES = 'uint_bytes', 
        IPv4 = 'ipv4', 
        IPv6 = 'ipv6', 
        IPXNET = 'ipxnet', 
        FRAMENUM = 'framenum', 
        PCRE = 'pcre', 
        GUID = 'guid', 
        OID = 'oid', 
        PROTOCOL = 'protocol', 
        REL_OID = 'rel_oid', 
        SYSTEM_ID = 'system_id', 
        EUI64 = 'eui64', 
        NON = 'non', 
    }

    enum frametype {
        NONE,
        REQUEST,
        RESPONSE,
        ACK,
        DUP_ACK
    }

    enum base {
        NONE = 'none',
        LOCAL = 'local',
        UTC = 'utc',
        DOY_UTC = 'doy_utc',
        ASCII = 'ascii',
        UNICODE = 'unicode',
        DOT = 'dot',
        DASH = 'dash',
        COLON = 'colon',
        SPACE = 'space',
        DEC = 'dec',
        HEX = 'hex',
        OCT = 'oct',
        DEC_HEX = 'dec_hex',
        HEX_DEC = 'hex_dec',
        UNIT_STRING = 'unit_string',
        RANGE_STRING = 'range_string'
    }

    namespace expert {
        enum group {
            CHECKSUM = 'checksum',
            SEQUENCE = 'sequence',
            RESPONSE_CODE = 'response_code',
            REQUEST_CODE = 'request_code',
            UNDECODED = 'undecoded',
            REASSEMBLE = 'reassemble',
            MALFORMED = 'malformed',
            DEBUG = 'debug',
            PROTOCOL = 'protocol',
            SECURITY = 'security',
            COMMENTS_GROUP = 'comments_group',
            DECRYPTION = 'decryption',
            ASSUMPTION = 'assumption',
            DEPRECATED = 'deprecated',
        }

        enum severity {
            COMMENT = 'comment',
            CHAT = 'chat',
            NOTE = 'note',
            WARN = 'warn',
            ERROR = 'error'
        }
    }

    function register_postdissector(this: void, proto: Proto, allfields ?: boolean): void
}
