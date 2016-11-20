var searchIndex = {};
searchIndex["miniz_sys"] = {"doc":"","items":[[3,"mz_stream","miniz_sys","",null,null],[12,"next_in","","",0,null],[12,"avail_in","","",0,null],[12,"total_in","","",0,null],[12,"next_out","","",0,null],[12,"avail_out","","",0,null],[12,"total_out","","",0,null],[12,"msg","","",0,null],[12,"state","","",0,null],[12,"zalloc","","",0,null],[12,"zfree","","",0,null],[12,"opaque","","",0,null],[12,"data_type","","",0,null],[12,"adler","","",0,null],[12,"reserved","","",0,null],[4,"mz_internal_state","","",null,null],[5,"mz_deflateInit2","","",null,null],[5,"mz_deflate","","",null,null],[5,"mz_deflateEnd","","",null,null],[5,"mz_deflateReset","","",null,null],[5,"mz_inflateInit2","","",null,null],[5,"mz_inflate","","",null,null],[5,"mz_inflateEnd","","",null,null],[5,"mz_crc32","","",null,null],[6,"mz_alloc_func","","",null,null],[6,"mz_free_func","","",null,null],[17,"MZ_NO_FLUSH","","",null,null],[17,"MZ_PARTIAL_FLUSH","","",null,null],[17,"MZ_SYNC_FLUSH","","",null,null],[17,"MZ_FULL_FLUSH","","",null,null],[17,"MZ_FINISH","","",null,null],[17,"MZ_BLOCK","","",null,null],[17,"MZ_OK","","",null,null],[17,"MZ_STREAM_END","","",null,null],[17,"MZ_NEED_DICT","","",null,null],[17,"MZ_ERRNO","","",null,null],[17,"MZ_STREAM_ERROR","","",null,null],[17,"MZ_DATA_ERROR","","",null,null],[17,"MZ_MEM_ERROR","","",null,null],[17,"MZ_BUF_ERROR","","",null,null],[17,"MZ_VERSION_ERROR","","",null,null],[17,"MZ_PARAM_ERROR","","",null,null],[17,"MZ_DEFLATED","","",null,null],[17,"MZ_DEFAULT_WINDOW_BITS","","",null,null],[17,"MZ_DEFAULT_STRATEGY","","",null,null]],"paths":[[3,"mz_stream"]]};
searchIndex["flate2"] = {"doc":"A DEFLATE-based stream compression/decompression library","items":[[3,"GzBuilder","flate2","A builder structure to create a new gzip Encoder.",null,null],[3,"GzHeader","","A structure representing the header of a gzip stream.",null,null],[3,"Compress","","Raw in-memory compression stream for blocks of data.",null,null],[3,"Decompress","","Raw in-memory decompression stream for blocks of data.",null,null],[3,"DataError","","Error returned when a decompression object finds that the input stream of\nbytes was not a valid input stream of bytes.",null,null],[4,"Status","","Possible status results of compressing some data or successfully\ndecompressing a block of data.",null,null],[13,"Ok","","Indicates success.",0,null],[13,"BufError","","Indicates that forward progress is not possible due to input or output\nbuffers being empty.",0,null],[13,"StreamEnd","","Indicates that all input has been consumed and all output bytes have\nbeen written. Decompression/compression should not be called again.",0,null],[4,"Flush","","Values which indicate the form of flushing to be used when compressing or\ndecompressing in-memory data.",null,null],[13,"None","","A typical parameter for passing to compression/decompression functions,\nthis indicates that the underlying stream to decide how much data to\naccumulate before producing output in order to maximize compression.",1,null],[13,"Sync","","All pending output is flushed to the output buffer and the output is\naligned on a byte boundary so that the decompressor can get all input\ndata available so far.",1,null],[13,"Partial","","All pending output is flushed to the output buffer, but the output is\nnot aligned to a byte boundary.",1,null],[13,"Block","","A deflate block is completed and emitted, as for `Flush::Sync`, but the\noutput is not aligned on a byte boundary and up to seven vits of the\ncurrent block are held to be written as the next byte after the next\ndeflate block is completed.",1,null],[13,"Full","","All output is flushed as with `Flush::Sync` and the compression state is\nreset so decompression can restart from this point if previous\ncompressed data has been damaged or if random access is desired.",1,null],[13,"Finish","","Pending input is processed and pending output is flushed.",1,null],[4,"Compression","","When compressing data, the compression level can be specified by a value in\nthis enum.",null,null],[13,"None","","No compression is to be performed, this may actually inflate data\nslightly when encoding.",2,null],[13,"Fast","","Optimize for the best speed of encoding.",2,null],[13,"Best","","Optimize for the size of data being encoded.",2,null],[13,"Default","","Choose the default compression, a balance between speed and size.",2,null],[11,"new","","Create a new blank builder with no header by default.",3,{"inputs":[],"output":{"name":"builder"}}],[11,"mtime","","Configure the `mtime` field in the gzip header.",3,null],[11,"extra","","Configure the `extra` field in the gzip header.",3,null],[11,"filename","","Configure the `filename` field in the gzip header.",3,null],[11,"comment","","Configure the `comment` field in the gzip header.",3,null],[11,"write","","Consume this builder, creating a writer encoder in the process.",3,null],[11,"read","","Consume this builder, creating a reader encoder in the process.",3,null],[11,"buf_read","","Consume this builder, creating a reader encoder in the process.",3,null],[11,"filename","","Returns the `filename` field of this gzip stream&#39;s header, if present.",4,null],[11,"extra","","Returns the `extra` field of this gzip stream&#39;s header, if present.",4,null],[11,"comment","","Returns the `comment` field of this gzip stream&#39;s header, if present.",4,null],[11,"mtime","","Returns the `mtime` field of this gzip stream&#39;s header, if present.",4,null],[11,"fmt","","",5,null],[11,"new","","Creates a new object ready for compressing data that it&#39;s given.",6,{"inputs":[{"name":"compression"},{"name":"bool"}],"output":{"name":"compress"}}],[11,"total_in","","Returns the total number of input bytes which have been processed by\nthis compression object.",6,null],[11,"total_out","","Returns the total number of output bytes which have been produced by\nthis compression object.",6,null],[11,"reset","","Quickly resets this compressor without having to reallocate anything.",6,null],[11,"compress","","Compresses the input data into the output, consuming only as much\ninput as needed and writing as much output as possible.",6,null],[11,"compress_vec","","Compresses the input data into the extra space of the output, consuming\nonly as much input as needed and writing as much output as possible.",6,null],[11,"new","","Creates a new object ready for decompressing data that it&#39;s given.",7,{"inputs":[{"name":"bool"}],"output":{"name":"decompress"}}],[11,"total_in","","Returns the total number of input bytes which have been processed by\nthis decompression object.",7,null],[11,"total_out","","Returns the total number of output bytes which have been produced by\nthis decompression object.",7,null],[11,"decompress","","Decompresses the input data into the output, consuming only as much\ninput as needed and writing as much output as possible.",7,null],[11,"decompress_vec","","Decompresses the input data into the extra space in the output vector\nspecified by `output`.",7,null],[11,"description","","",5,null],[11,"fmt","","",5,null],[0,"read","","Types which operate over `Read` streams, both encoders and decoders for\nvarious formats.",null,null],[3,"DeflateEncoder","flate2::read","A DEFLATE encoder, or compressor.",null,null],[3,"DeflateDecoder","","A DEFLATE decoder, or decompressor.",null,null],[3,"ZlibEncoder","","A ZLIB encoder, or compressor.",null,null],[3,"ZlibDecoder","","A ZLIB decoder, or decompressor.",null,null],[3,"GzEncoder","","A gzip streaming encoder",null,null],[3,"GzDecoder","","A gzip streaming decoder",null,null],[0,"write","flate2","Types which operate over `Write` streams, both encoders and decoders for\nvarious formats.",null,null],[3,"DeflateEncoder","flate2::write","A DEFLATE encoder, or compressor.",null,null],[3,"DeflateDecoder","","A DEFLATE decoder, or decompressor.",null,null],[3,"ZlibEncoder","","A ZLIB encoder, or compressor.",null,null],[3,"ZlibDecoder","","A ZLIB decoder, or decompressor.",null,null],[3,"GzEncoder","","A gzip streaming encoder",null,null],[0,"bufread","flate2","Types which operate over `BufRead` streams, both encoders and decoders for\nvarious formats.",null,null],[3,"DeflateEncoder","flate2::bufread","A DEFLATE encoder, or compressor.",null,null],[3,"DeflateDecoder","","A DEFLATE decoder, or decompressor.",null,null],[3,"ZlibEncoder","","A ZLIB encoder, or compressor.",null,null],[3,"ZlibDecoder","","A ZLIB decoder, or decompressor.",null,null],[3,"GzEncoder","","A gzip streaming encoder",null,null],[3,"GzDecoder","","A gzip streaming decoder",null,null],[8,"FlateReadExt","flate2","A helper trait to create encoder/decoders with method syntax.",null,null],[11,"gz_encode","","Consume this reader to create a compression stream at the specified\ncompression level.",8,null],[11,"gz_decode","","Consume this reader to create a decompression stream of this stream.",8,null],[11,"zlib_encode","","Consume this reader to create a compression stream at the specified\ncompression level.",8,null],[11,"zlib_decode","","Consume this reader to create a decompression stream of this stream.",8,null],[11,"deflate_encode","","Consume this reader to create a compression stream at the specified\ncompression level.",8,null],[11,"deflate_decode","","Consume this reader to create a decompression stream of this stream.",8,null],[8,"FlateWriteExt","","A helper trait to create encoder/decoders with method syntax.",null,null],[11,"gz_encode","","Consume this writer to create a compression stream at the specified\ncompression level.",9,null],[11,"zlib_encode","","Consume this writer to create a compression stream at the specified\ncompression level.",9,null],[11,"zlib_decode","","Consume this writer to create a decompression stream of this stream.",9,null],[11,"deflate_encode","","Consume this writer to create a compression stream at the specified\ncompression level.",9,null],[11,"deflate_decode","","Consume this writer to create a decompression stream of this stream.",9,null],[11,"clone","","",2,null],[11,"new","flate2::write","Creates a new encoder which will write compressed data to the stream\ngiven at the given compression level.",10,{"inputs":[{"name":"w"},{"name":"compression"}],"output":{"name":"encoderwriter"}}],[11,"reset","","Resets the state of this encoder entirely, swapping out the output\nstream for another.",10,null],[11,"finish","","Consumes this encoder, flushing the output stream.",10,null],[11,"write","","",10,null],[11,"flush","","",10,null],[11,"new","flate2::read","Creates a new encoder which will read uncompressed data from the given\nstream and emit the compressed stream.",11,{"inputs":[{"name":"r"},{"name":"compression"}],"output":{"name":"encoderreader"}}],[11,"reset","","Resets the state of this encoder entirely, swapping out the input\nstream for another.",11,null],[11,"get_ref","","Acquires a reference to the underlying reader",11,null],[11,"get_mut","","Acquires a mutable reference to the underlying stream",11,null],[11,"into_inner","","Consumes this encoder, returning the underlying reader.",11,null],[11,"read","","",11,null],[11,"new","flate2::bufread","Creates a new encoder which will read uncompressed data from the given\nstream and emit the compressed stream.",12,{"inputs":[{"name":"r"},{"name":"compression"}],"output":{"name":"encoderreaderbuf"}}],[11,"reset","","Resets the state of this encoder entirely, swapping out the input\nstream for another.",12,null],[11,"get_ref","","Acquires a reference to the underlying reader",12,null],[11,"get_mut","","Acquires a mutable reference to the underlying stream",12,null],[11,"into_inner","","Consumes this encoder, returning the underlying reader.",12,null],[11,"read","","",12,null],[11,"new","flate2::read","Creates a new decoder which will decompress data read from the given\nstream.",13,{"inputs":[{"name":"r"}],"output":{"name":"decoderreader"}}],[11,"new_with_buf","","Same as `new`, but the intermediate buffer for data is specified.",13,{"inputs":[{"name":"r"},{"name":"vec"}],"output":{"name":"decoderreader"}}],[11,"reset","","Resets the state of this decoder entirely, swapping out the input\nstream for another.",13,null],[11,"get_ref","","Acquires a reference to the underlying stream",13,null],[11,"get_mut","","Acquires a mutable reference to the underlying stream",13,null],[11,"into_inner","","Consumes this decoder, returning the underlying reader.",13,null],[11,"total_in","","Returns the number of bytes that the decompressor has consumed.",13,null],[11,"total_out","","Returns the number of bytes that the decompressor has produced.",13,null],[11,"read","","",13,null],[11,"new","flate2::bufread","Creates a new decoder which will decompress data read from the given\nstream.",14,{"inputs":[{"name":"r"}],"output":{"name":"decoderreaderbuf"}}],[11,"reset","","Resets the state of this decoder entirely, swapping out the input\nstream for another.",14,null],[11,"get_ref","","Acquires a reference to the underlying stream",14,null],[11,"get_mut","","Acquires a mutable reference to the underlying stream",14,null],[11,"into_inner","","Consumes this decoder, returning the underlying reader.",14,null],[11,"total_in","","Returns the number of bytes that the decompressor has consumed.",14,null],[11,"total_out","","Returns the number of bytes that the decompressor has produced.",14,null],[11,"read","","",14,null],[11,"new","flate2::write","Creates a new decoder which will write uncompressed data to the stream.",15,{"inputs":[{"name":"w"}],"output":{"name":"decoderwriter"}}],[11,"reset","","Resets the state of this decoder entirely, swapping out the output\nstream for another.",15,null],[11,"finish","","Consumes this encoder, flushing the output stream.",15,null],[11,"total_in","","Returns the number of bytes that the decompressor has consumed for\ndecompression.",15,null],[11,"total_out","","Returns the number of bytes that the decompressor has written to its\noutput stream.",15,null],[11,"write","","",15,null],[11,"flush","","",15,null],[11,"new","","Creates a new encoder which will use the given compression level.",16,{"inputs":[{"name":"w"},{"name":"compression"}],"output":{"name":"encoderwriter"}}],[11,"finish","","Finish encoding this stream, returning the underlying writer once the\nencoding is done.",16,null],[11,"write","","",16,null],[11,"flush","","",16,null],[11,"drop","","",16,null],[11,"new","flate2::read","Creates a new encoder which will use the given compression level.",17,{"inputs":[{"name":"r"},{"name":"compression"}],"output":{"name":"encoderreader"}}],[11,"into_inner","","Returns the underlying stream, consuming this encoder",17,null],[11,"read","","",17,null],[11,"new","flate2::bufread","Creates a new encoder which will use the given compression level.",18,{"inputs":[{"name":"r"},{"name":"compression"}],"output":{"name":"encoderreaderbuf"}}],[11,"into_inner","","Returns the underlying stream, consuming this encoder",18,null],[11,"read","","",18,null],[11,"new","flate2::read","Creates a new decoder from the given reader, immediately parsing the\ngzip header.",19,{"inputs":[{"name":"r"}],"output":{"name":"result"}}],[11,"header","","Returns the header associated with this stream.",19,null],[11,"read","","",19,null],[11,"new","flate2::bufread","Creates a new decoder from the given reader, immediately parsing the\ngzip header.",20,{"inputs":[{"name":"r"}],"output":{"name":"result"}}],[11,"header","","Returns the header associated with this stream.",20,null],[11,"read","","",20,null],[11,"new","flate2::write","Creates a new encoder which will write compressed data to the stream\ngiven at the given compression level.",21,{"inputs":[{"name":"w"},{"name":"compression"}],"output":{"name":"encoderwriter"}}],[11,"reset","","Resets the state of this encoder entirely, swapping out the output\nstream for another.",21,null],[11,"finish","","Consumes this encoder, flushing the output stream.",21,null],[11,"write","","",21,null],[11,"flush","","",21,null],[11,"new","flate2::read","Creates a new encoder which will read uncompressed data from the given\nstream and emit the compressed stream.",22,{"inputs":[{"name":"r"},{"name":"compression"}],"output":{"name":"encoderreader"}}],[11,"reset","","Resets the state of this encoder entirely, swapping out the input\nstream for another.",22,null],[11,"get_ref","","Acquires a reference to the underlying stream",22,null],[11,"get_mut","","Acquires a mutable reference to the underlying stream",22,null],[11,"into_inner","","Consumes this encoder, returning the underlying reader.",22,null],[11,"read","","",22,null],[11,"new","flate2::bufread","Creates a new encoder which will read uncompressed data from the given\nstream and emit the compressed stream.",23,{"inputs":[{"name":"r"},{"name":"compression"}],"output":{"name":"encoderreaderbuf"}}],[11,"reset","","Resets the state of this encoder entirely, swapping out the input\nstream for another.",23,null],[11,"get_ref","","Acquires a reference to the underlying stream",23,null],[11,"get_mut","","Acquires a mutable reference to the underlying stream",23,null],[11,"into_inner","","Consumes this encoder, returning the underlying reader.",23,null],[11,"read","","",23,null],[11,"new","flate2::read","Creates a new decoder which will decompress data read from the given\nstream.",24,{"inputs":[{"name":"r"}],"output":{"name":"decoderreader"}}],[11,"new_with_buf","","Same as `new`, but the intermediate buffer for data is specified.",24,{"inputs":[{"name":"r"},{"name":"vec"}],"output":{"name":"decoderreader"}}],[11,"reset","","Resets the state of this decoder entirely, swapping out the input\nstream for another.",24,null],[11,"get_ref","","Acquires a reference to the underlying stream",24,null],[11,"get_mut","","Acquires a mutable reference to the underlying stream",24,null],[11,"into_inner","","Consumes this decoder, returning the underlying reader.",24,null],[11,"total_in","","Returns the number of bytes that the decompressor has consumed.",24,null],[11,"total_out","","Returns the number of bytes that the decompressor has produced.",24,null],[11,"read","","",24,null],[11,"new","flate2::bufread","Creates a new decoder which will decompress data read from the given\nstream.",25,{"inputs":[{"name":"r"}],"output":{"name":"decoderreaderbuf"}}],[11,"reset","","Resets the state of this decoder entirely, swapping out the input\nstream for another.",25,null],[11,"get_ref","","Acquires a reference to the underlying stream",25,null],[11,"get_mut","","Acquires a mutable reference to the underlying stream",25,null],[11,"into_inner","","Consumes this decoder, returning the underlying reader.",25,null],[11,"total_in","","Returns the number of bytes that the decompressor has consumed.",25,null],[11,"total_out","","Returns the number of bytes that the decompressor has produced.",25,null],[11,"read","","",25,null],[11,"new","flate2::write","Creates a new decoder which will write uncompressed data to the stream.",26,{"inputs":[{"name":"w"}],"output":{"name":"decoderwriter"}}],[11,"reset","","Resets the state of this decoder entirely, swapping out the output\nstream for another.",26,null],[11,"finish","","Consumes this encoder, flushing the output stream.",26,null],[11,"total_in","","Returns the number of bytes that the decompressor has consumed for\ndecompression.",26,null],[11,"total_out","","Returns the number of bytes that the decompressor has written to its\noutput stream.",26,null],[11,"write","","",26,null],[11,"flush","","",26,null]],"paths":[[4,"Status"],[4,"Flush"],[4,"Compression"],[3,"GzBuilder"],[3,"GzHeader"],[3,"DataError"],[3,"Compress"],[3,"Decompress"],[8,"FlateReadExt"],[8,"FlateWriteExt"],[3,"DeflateEncoder"],[3,"DeflateEncoder"],[3,"DeflateEncoder"],[3,"DeflateDecoder"],[3,"DeflateDecoder"],[3,"DeflateDecoder"],[3,"GzEncoder"],[3,"GzEncoder"],[3,"GzEncoder"],[3,"GzDecoder"],[3,"GzDecoder"],[3,"ZlibEncoder"],[3,"ZlibEncoder"],[3,"ZlibEncoder"],[3,"ZlibDecoder"],[3,"ZlibDecoder"],[3,"ZlibDecoder"]]};
initSearch(searchIndex);