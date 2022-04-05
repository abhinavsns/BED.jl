var documenterSearchIndex = {"docs":
[{"location":"man/bed/#BED","page":"BED","title":"BED","text":"","category":"section"},{"location":"man/bed/","page":"BED","title":"BED","text":"BED is a text-based file format for representing genomic annotations like genes, transcripts, and so on. A BED file has tab-delimited and variable-length fields; the first three fields denoting a genomic interval are mandatory.","category":"page"},{"location":"man/bed/","page":"BED","title":"BED","text":"This is an example of RNA transcripts:","category":"page"},{"location":"man/bed/","page":"BED","title":"BED","text":"chr9\t68331023\t68424451\tNM_015110\t0\t+\nchr9\t68456943\t68486659\tNM_001206\t0\t-","category":"page"},{"location":"man/bed/","page":"BED","title":"BED","text":"The BED package supports I/O for BED by providing the following three types:","category":"page"},{"location":"man/bed/","page":"BED","title":"BED","text":"Reader type: BED.Reader\nWriter type: BED.Writer\nElement type: BED.Record","category":"page"},{"location":"man/bed/#Examples","page":"BED","title":"Examples","text":"","category":"section"},{"location":"man/bed/","page":"BED","title":"BED","text":"Here is a common workflow to iterate over all records in a BED file:","category":"page"},{"location":"man/bed/","page":"BED","title":"BED","text":"# Import the BED module.\nusing BED\n\n# Open a BED file.\nreader = open(BED.Reader, \"data.bed\")\n\n# Iterate over records.\nfor record in reader\n    # Do something on record (see Accessors section).\n    chrom = BED.chrom(record)\n    # ...\nend\n\n# Finally, close the reader.\nclose(reader)","category":"page"},{"location":"man/bed/","page":"BED","title":"BED","text":"The iterator interface demonstrated above allocates an object for each record and that may be a bottleneck of reading data from a file. In-place reading reuses a pre-allocated object for every record and less memory allocation happens in reading:","category":"page"},{"location":"man/bed/","page":"BED","title":"BED","text":"# Import the BED module.\nusing BED\n\n# Open a BED file.\nreader = open(BED.Reader, \"data.bed\")\n\n# Pre-allocate record.\nrecord = BED.Record()\nwhile !eof(reader)\n    empty!(record)\n    read!(reader, record)\n    # do something\nend\n\n# Finally, close the reader.\nclose(reader)","category":"page"},{"location":"man/bed/","page":"BED","title":"BED","text":"If you repeatedly access records within specific ranges, it would be more efficient to construct an IntervalCollection object from a BED reader:","category":"page"},{"location":"man/bed/","page":"BED","title":"BED","text":"using BED\nusing GenomicFeatures\n\n# Create an interval collection in memory.\nicol = open(BED.Reader, \"data.bed\") do reader\n    IntervalCollection(reader)\nend\n\n# Query overlapping records.\nfor interval in eachoverlap(icol, Interval(\"chrX\", 40001, 51500))\n    # A record is stored in the metadata field of an interval.\n    record = metadata(interval)\n    # ...\nend","category":"page"},{"location":"#BED.jl","page":"Home","title":"BED.jl","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"(Image: Project Status: Active – The project has reached a stable, usable state and is being actively developed.) (Image: Latest Release) (Image: MIT license) (Image: Stable documentation) (Image: Latest documentation)","category":"page"},{"location":"","page":"Home","title":"Home","text":"This project follows the semver pro forma and uses the git-flow branching model.","category":"page"},{"location":"#Description","page":"Home","title":"Description","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"BED provides I/O and utilities for the BED file format.","category":"page"},{"location":"#Installation","page":"Home","title":"Installation","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"You can install the BED package from the Julia REPL. Press ] to enter pkg mode, then enter the following command:","category":"page"},{"location":"","page":"Home","title":"Home","text":"add BED","category":"page"},{"location":"","page":"Home","title":"Home","text":"If you are interested in the cutting edge of the development, please check out the develop branch to try new features before release.","category":"page"},{"location":"#Testing","page":"Home","title":"Testing","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"BED is tested against Julia 1.X on Linux, OS X, and Windows.","category":"page"},{"location":"","page":"Home","title":"Home","text":"Latest build status:","category":"page"},{"location":"","page":"Home","title":"Home","text":"(Image: Unit Tests) (Image: Documentation) (Image: codecov)","category":"page"},{"location":"#Contributing","page":"Home","title":"Contributing","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"We appreciate contributions from users including reporting bugs, fixing issues, improving performance and adding new features.","category":"page"},{"location":"","page":"Home","title":"Home","text":"Take a look at the contributing files detailed contributor and maintainer guidelines, and code of conduct.","category":"page"},{"location":"#Financial-contributions","page":"Home","title":"Financial contributions","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"We also welcome financial contributions in full transparency on our open collective. Anyone can file an expense. If the expense makes sense for the development the core contributors and the person who filed the expense will be reimbursed.","category":"page"},{"location":"#Backers-and-Sponsors","page":"Home","title":"Backers & Sponsors","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Thank you to all our backers and sponsors!","category":"page"},{"location":"","page":"Home","title":"Home","text":"Love our work and community? Become a backer.","category":"page"},{"location":"","page":"Home","title":"Home","text":"(Image: backers)","category":"page"},{"location":"","page":"Home","title":"Home","text":"Does your company use BioJulia? Help keep BioJulia feature rich and healthy by sponsoring the project. Your logo will show up here with a link to your website.","category":"page"},{"location":"","page":"Home","title":"Home","text":"(Image: ) (Image: ) (Image: ) (Image: ) (Image: ) (Image: ) (Image: ) (Image: ) (Image: ) (Image: )","category":"page"},{"location":"#Questions?","page":"Home","title":"Questions?","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"If you have a question about contributing or using BioJulia software, come on over and chat to us on the Julia Slack workspace, or you can try the Bio category of the Julia discourse site.","category":"page"},{"location":"man/api/#API-Reference","page":"API Reference","title":"API Reference","text":"","category":"section"},{"location":"man/api/#Public","page":"API Reference","title":"Public","text":"","category":"section"},{"location":"man/api/","page":"API Reference","title":"API Reference","text":"Modules = [BED]\nPrivate = false","category":"page"},{"location":"man/api/#Internal","page":"API Reference","title":"Internal","text":"","category":"section"},{"location":"man/api/","page":"API Reference","title":"API Reference","text":"Modules = [BED]\nPublic = false","category":"page"},{"location":"man/api/#BED.Reader-Tuple{IO}","page":"API Reference","title":"BED.Reader","text":"BED.Reader(input::IO; index=nothing)\nBED.Reader(input::AbstractString; index=:auto)\n\nCreate a data reader of the BED file format.\n\nThe first argument specifies the data source. When it is a filepath that ends with .bgz, it is considered to be block compression file format (BGZF) and the function will try to find a tabix index file (<filename>.tbi) and read it if any. See http://www.htslib.org/doc/tabix.html for bgzip and tabix tools.\n\nArguments\n\ninput: data source\nindex: path to a tabix file\n\n\n\n\n\n","category":"method"},{"location":"man/api/#BED.Record-Tuple{AbstractString}","page":"API Reference","title":"BED.Record","text":"BED.Record(str::AbstractString)\n\nCreate a BED record object from str.\n\nThis function verifies and indexes fields for accessors.\n\n\n\n\n\n","category":"method"},{"location":"man/api/#BED.Record-Tuple{Vector{UInt8}}","page":"API Reference","title":"BED.Record","text":"BED.Record(data::Vector{UInt8})\n\nCreate a BED record object from data.\n\nThis function verifies and indexes fields for accessors. Note that the ownership of data is transferred to a new record object.\n\n\n\n\n\n","category":"method"},{"location":"man/api/#BED.Record-Tuple{}","page":"API Reference","title":"BED.Record","text":"BED.Record()\n\nCreate an unfilled BED record.\n\n\n\n\n\n","category":"method"},{"location":"man/api/#BED.Writer","page":"API Reference","title":"BED.Writer","text":"BED.Writer(output::IO)\n\nCreate a data writer of the BED file format.\n\nArguments:\n\noutput: data sink\n\n\n\n\n\n","category":"type"},{"location":"man/api/#BED.blockcount-Tuple{BED.Record}","page":"API Reference","title":"BED.blockcount","text":"blockcount(record::Record)::Int\n\nGet the number of blocks (exons) in record.\n\n\n\n\n\n","category":"method"},{"location":"man/api/#BED.blocksizes-Tuple{BED.Record}","page":"API Reference","title":"BED.blocksizes","text":"blocksizes(record::Record)::Vector{Int}\n\nGet the block (exon) sizes of record.\n\n\n\n\n\n","category":"method"},{"location":"man/api/#BED.blockstarts-Tuple{BED.Record}","page":"API Reference","title":"BED.blockstarts","text":"blockstarts(record::Record)::Vector{Int}\n\nGet the block (exon) starts of record.\n\nNote that the first base is numbered 1.\n\n\n\n\n\n","category":"method"},{"location":"man/api/#BED.chrom-Tuple{BED.Record}","page":"API Reference","title":"BED.chrom","text":"chrom(record::Record)::String\n\nGet the chromosome name of record.\n\n\n\n\n\n","category":"method"},{"location":"man/api/#BED.chromend-Tuple{BED.Record}","page":"API Reference","title":"BED.chromend","text":"chromend(record::Record)::Int\n\nGet the end position of record.\n\n\n\n\n\n","category":"method"},{"location":"man/api/#BED.chromstart-Tuple{BED.Record}","page":"API Reference","title":"BED.chromstart","text":"chromstart(record::Record)::Int\n\nGet the starting position of record.\n\nNote that the first base is numbered 1.\n\n\n\n\n\n","category":"method"},{"location":"man/api/#BED.itemrgb-Tuple{BED.Record}","page":"API Reference","title":"BED.itemrgb","text":"itemrgb(record::Record)::ColorTypes.RGB\n\nGet the RGB value of record.\n\nThe return type is defined in ColorTypes.jl.\n\n\n\n\n\n","category":"method"},{"location":"man/api/#BED.name-Tuple{BED.Record}","page":"API Reference","title":"BED.name","text":"name(record::Record)::String\n\nGet the name of record.\n\n\n\n\n\n","category":"method"},{"location":"man/api/#BED.score-Tuple{BED.Record}","page":"API Reference","title":"BED.score","text":"score(record::Record)::Int\n\nGet the score between 0 and 1000.\n\n\n\n\n\n","category":"method"},{"location":"man/api/#BED.strand-Tuple{BED.Record}","page":"API Reference","title":"BED.strand","text":"strand(record::Record)::GenomicFeatures.Strand\n\nGet the strand of record.\n\n\n\n\n\n","category":"method"},{"location":"man/api/#BED.thickend-Tuple{BED.Record}","page":"API Reference","title":"BED.thickend","text":"thickend(record::Record)::Int\n\nGet the end position at which record is drawn thickly.\n\n\n\n\n\n","category":"method"},{"location":"man/api/#BED.thickstart-Tuple{BED.Record}","page":"API Reference","title":"BED.thickstart","text":"thickstart(record::Record)::Int\n\nGet the starting position at which record is drawn thickly.\n\nNote that the first base is numbered 1.\n\n\n\n\n\n","category":"method"},{"location":"man/api/#Base.read!-Tuple{BED.Reader, BED.Record}","page":"API Reference","title":"Base.read!","text":"read!(rdr::Reader, rec::Record)\n\nRead a Record into rec; overwriting or adding to existing field values. It is assumed that rec is already initialized or empty.\n\n\n\n\n\n","category":"method"}]
}
